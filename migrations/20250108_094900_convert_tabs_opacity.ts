import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-sqlite'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  // Step 1: Add the new overlayOpacity column to pages_blocks_tabs
  await db.run(sql`ALTER TABLE pages_blocks_tabs ADD COLUMN overlay_opacity TEXT DEFAULT 'overlay-opacity-25';`)

  // Step 2: Migrate existing data from no_image_filter and filter_opacity to overlayOpacity
  // Logic: if no_image_filter = true, set overlay_opacity to 'overlay-opacity-0'
  // Otherwise, convert filter_opacity values:
  // '0.25' -> 'overlay-opacity-25'
  // '0.65' -> 'overlay-opacity-25' (default medium)
  // '0.85' -> 'overlay-opacity-50'

  await db.run(sql`
    UPDATE pages_blocks_tabs
    SET overlay_opacity = CASE
      WHEN no_image_filter = 1 THEN 'overlay-opacity-0'
      WHEN filter_opacity = '0.25' THEN 'overlay-opacity-10'
      WHEN filter_opacity = '0.85' THEN 'overlay-opacity-50'
      ELSE 'overlay-opacity-25'
    END
  `)

  // Step 3: Drop old columns
  // SQLite doesn't support DROP COLUMN directly, so we need to recreate the table
  await db.run(sql`CREATE TABLE pages_blocks_tabs_new (
    _order INTEGER NOT NULL,
    _parent_id INTEGER NOT NULL,
    _path TEXT NOT NULL,
    id TEXT PRIMARY KEY NOT NULL,
    tabs_width TEXT DEFAULT 'col-lg-12',
    image_id INTEGER,
    layout TEXT DEFAULT 'tabsImage',
    overlay_opacity TEXT DEFAULT 'overlay-opacity-25',
    block_name TEXT,
    background_color TEXT DEFAULT 'bg-primary',
    padding_top TEXT DEFAULT 'pt-4',
    padding_bottom TEXT DEFAULT 'pb-4',
    FOREIGN KEY (image_id) REFERENCES media(id) ON UPDATE no action ON DELETE set null,
    FOREIGN KEY (_parent_id) REFERENCES pages(id) ON UPDATE no action ON DELETE cascade
  );`)

  await db.run(sql`INSERT INTO pages_blocks_tabs_new
    (_order, _parent_id, _path, id, tabs_width, image_id, layout, overlay_opacity, block_name, background_color, padding_top, padding_bottom)
    SELECT _order, _parent_id, _path, id, tabs_width, image_id, layout, overlay_opacity, block_name, background_color, padding_top, padding_bottom
    FROM pages_blocks_tabs;
  `)

  await db.run(sql`DROP TABLE pages_blocks_tabs;`)
  await db.run(sql`ALTER TABLE pages_blocks_tabs_new RENAME TO pages_blocks_tabs;`)

  // Recreate indexes
  await db.run(sql`CREATE INDEX pages_blocks_tabs_order_idx ON pages_blocks_tabs (_order);`)
  await db.run(sql`CREATE INDEX pages_blocks_tabs_parent_id_idx ON pages_blocks_tabs (_parent_id);`)
  await db.run(sql`CREATE INDEX pages_blocks_tabs_path_idx ON pages_blocks_tabs (_path);`)
  await db.run(sql`CREATE INDEX pages_blocks_tabs_image_idx ON pages_blocks_tabs (image_id);`)

  // Step 4: Repeat for _pages_v_blocks_tabs (version table)
  await db.run(sql`ALTER TABLE _pages_v_blocks_tabs ADD COLUMN overlay_opacity TEXT DEFAULT 'overlay-opacity-25';`)

  await db.run(sql`
    UPDATE _pages_v_blocks_tabs
    SET overlay_opacity = CASE
      WHEN no_image_filter = 1 THEN 'overlay-opacity-0'
      WHEN filter_opacity = '0.25' THEN 'overlay-opacity-10'
      WHEN filter_opacity = '0.85' THEN 'overlay-opacity-50'
      ELSE 'overlay-opacity-25'
    END
  `)

  await db.run(sql`CREATE TABLE _pages_v_blocks_tabs_new (
    _order INTEGER NOT NULL,
    _parent_id INTEGER NOT NULL,
    _path TEXT NOT NULL,
    id INTEGER PRIMARY KEY NOT NULL,
    tabs_width TEXT DEFAULT 'col-lg-12',
    image_id INTEGER,
    layout TEXT DEFAULT 'tabsImage',
    overlay_opacity TEXT DEFAULT 'overlay-opacity-25',
    _uuid TEXT,
    block_name TEXT,
    background_color TEXT DEFAULT 'bg-primary',
    padding_top TEXT DEFAULT 'pt-4',
    padding_bottom TEXT DEFAULT 'pb-4',
    FOREIGN KEY (image_id) REFERENCES media(id) ON UPDATE no action ON DELETE set null,
    FOREIGN KEY (_parent_id) REFERENCES _pages_v(id) ON UPDATE no action ON DELETE cascade
  );`)

  await db.run(sql`INSERT INTO _pages_v_blocks_tabs_new
    (_order, _parent_id, _path, id, tabs_width, image_id, layout, overlay_opacity, _uuid, block_name, background_color, padding_top, padding_bottom)
    SELECT _order, _parent_id, _path, id, tabs_width, image_id, layout, overlay_opacity, _uuid, block_name, background_color, padding_top, padding_bottom
    FROM _pages_v_blocks_tabs;
  `)

  await db.run(sql`DROP TABLE _pages_v_blocks_tabs;`)
  await db.run(sql`ALTER TABLE _pages_v_blocks_tabs_new RENAME TO _pages_v_blocks_tabs;`)

  // Recreate indexes for version table
  await db.run(sql`CREATE INDEX _pages_v_blocks_tabs_order_idx ON _pages_v_blocks_tabs (_order);`)
  await db.run(sql`CREATE INDEX _pages_v_blocks_tabs_parent_id_idx ON _pages_v_blocks_tabs (_parent_id);`)
  await db.run(sql`CREATE INDEX _pages_v_blocks_tabs_path_idx ON _pages_v_blocks_tabs (_path);`)
  await db.run(sql`CREATE INDEX _pages_v_blocks_tabs_image_idx ON _pages_v_blocks_tabs (image_id);`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  // Rollback: recreate tables with old structure
  await db.run(sql`CREATE TABLE pages_blocks_tabs_old (
    _order INTEGER NOT NULL,
    _parent_id INTEGER NOT NULL,
    _path TEXT NOT NULL,
    id TEXT PRIMARY KEY NOT NULL,
    tabs_width TEXT DEFAULT 'col-lg-12',
    image_id INTEGER,
    layout TEXT DEFAULT 'tabsImage',
    no_image_filter INTEGER DEFAULT false,
    filter_opacity TEXT DEFAULT '0.65',
    block_name TEXT,
    background_color TEXT DEFAULT 'bg-primary',
    padding_top TEXT DEFAULT 'pt-4',
    padding_bottom TEXT DEFAULT 'pb-4',
    FOREIGN KEY (image_id) REFERENCES media(id) ON UPDATE no action ON DELETE set null,
    FOREIGN KEY (_parent_id) REFERENCES pages(id) ON UPDATE no action ON DELETE cascade
  );`)

  await db.run(sql`INSERT INTO pages_blocks_tabs_old
    (_order, _parent_id, _path, id, tabs_width, image_id, layout, no_image_filter, filter_opacity, block_name, background_color, padding_top, padding_bottom)
    SELECT _order, _parent_id, _path, id, tabs_width, image_id, layout,
      CASE WHEN overlay_opacity = 'overlay-opacity-0' THEN 1 ELSE 0 END,
      CASE
        WHEN overlay_opacity = 'overlay-opacity-10' THEN '0.25'
        WHEN overlay_opacity = 'overlay-opacity-50' THEN '0.85'
        ELSE '0.65'
      END,
      block_name, background_color, padding_top, padding_bottom
    FROM pages_blocks_tabs;
  `)

  await db.run(sql`DROP TABLE pages_blocks_tabs;`)
  await db.run(sql`ALTER TABLE pages_blocks_tabs_old RENAME TO pages_blocks_tabs;`)

  await db.run(sql`CREATE INDEX pages_blocks_tabs_order_idx ON pages_blocks_tabs (_order);`)
  await db.run(sql`CREATE INDEX pages_blocks_tabs_parent_id_idx ON pages_blocks_tabs (_parent_id);`)
  await db.run(sql`CREATE INDEX pages_blocks_tabs_path_idx ON pages_blocks_tabs (_path);`)
  await db.run(sql`CREATE INDEX pages_blocks_tabs_image_idx ON pages_blocks_tabs (image_id);`)

  // Repeat for version table
  await db.run(sql`CREATE TABLE _pages_v_blocks_tabs_old (
    _order INTEGER NOT NULL,
    _parent_id INTEGER NOT NULL,
    _path TEXT NOT NULL,
    id INTEGER PRIMARY KEY NOT NULL,
    tabs_width TEXT DEFAULT 'col-lg-12',
    image_id INTEGER,
    layout TEXT DEFAULT 'tabsImage',
    no_image_filter INTEGER DEFAULT false,
    filter_opacity TEXT DEFAULT '0.65',
    _uuid TEXT,
    block_name TEXT,
    background_color TEXT DEFAULT 'bg-primary',
    padding_top TEXT DEFAULT 'pt-4',
    padding_bottom TEXT DEFAULT 'pb-4',
    FOREIGN KEY (image_id) REFERENCES media(id) ON UPDATE no action ON DELETE set null,
    FOREIGN KEY (_parent_id) REFERENCES _pages_v(id) ON UPDATE no action ON DELETE cascade
  );`)

  await db.run(sql`INSERT INTO _pages_v_blocks_tabs_old
    (_order, _parent_id, _path, id, tabs_width, image_id, layout, no_image_filter, filter_opacity, _uuid, block_name, background_color, padding_top, padding_bottom)
    SELECT _order, _parent_id, _path, id, tabs_width, image_id, layout,
      CASE WHEN overlay_opacity = 'overlay-opacity-0' THEN 1 ELSE 0 END,
      CASE
        WHEN overlay_opacity = 'overlay-opacity-10' THEN '0.25'
        WHEN overlay_opacity = 'overlay-opacity-50' THEN '0.85'
        ELSE '0.65'
      END,
      _uuid, block_name, background_color, padding_top, padding_bottom
    FROM _pages_v_blocks_tabs;
  `)

  await db.run(sql`DROP TABLE _pages_v_blocks_tabs;`)
  await db.run(sql`ALTER TABLE _pages_v_blocks_tabs_old RENAME TO _pages_v_blocks_tabs;`)

  await db.run(sql`CREATE INDEX _pages_v_blocks_tabs_order_idx ON _pages_v_blocks_tabs (_order);`)
  await db.run(sql`CREATE INDEX _pages_v_blocks_tabs_parent_id_idx ON _pages_v_blocks_tabs (_parent_id);`)
  await db.run(sql`CREATE INDEX _pages_v_blocks_tabs_path_idx ON _pages_v_blocks_tabs (_path);`)
  await db.run(sql`CREATE INDEX _pages_v_blocks_tabs_image_idx ON _pages_v_blocks_tabs (image_id);`)
}
