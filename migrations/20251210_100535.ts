import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-sqlite'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.run(sql`CREATE TABLE \`pages_blocks_boxed_image\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`height\` text DEFAULT 'normal',
  	\`background_image_id\` integer,
  	\`no_filter\` integer DEFAULT false,
  	\`filter_color\` text DEFAULT 'primary',
  	\`filter_opacity\` text DEFAULT '0.65',
  	\`quote_tag\` text DEFAULT 'h3',
  	\`quote\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`background_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_boxed_image_order_idx\` ON \`pages_blocks_boxed_image\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_boxed_image_parent_id_idx\` ON \`pages_blocks_boxed_image\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_boxed_image_path_idx\` ON \`pages_blocks_boxed_image\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_boxed_image_background_image_idx\` ON \`pages_blocks_boxed_image\` (\`background_image_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_price_list_items_features\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`feature\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_price_list_items\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_price_list_items_features_order_idx\` ON \`pages_blocks_price_list_items_features\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_price_list_items_features_parent_id_idx\` ON \`pages_blocks_price_list_items_features\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_price_list_items\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`color\` text DEFAULT 'primary',
  	\`thumbnail_image_id\` integer,
  	\`category\` text,
  	\`title_tag\` text DEFAULT 'h2',
  	\`title\` text,
  	\`price\` text,
  	\`description\` text,
  	\`cta_text\` text,
  	\`cta_url\` text,
  	FOREIGN KEY (\`thumbnail_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_price_list\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_price_list_items_order_idx\` ON \`pages_blocks_price_list_items\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_price_list_items_parent_id_idx\` ON \`pages_blocks_price_list_items\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_price_list_items_thumbnail_image_idx\` ON \`pages_blocks_price_list_items\` (\`thumbnail_image_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_price_list\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_price_list_order_idx\` ON \`pages_blocks_price_list\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_price_list_parent_id_idx\` ON \`pages_blocks_price_list\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_price_list_path_idx\` ON \`pages_blocks_price_list\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_accordion_items\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text,
  	\`content\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_accordion\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_accordion_items_order_idx\` ON \`pages_blocks_accordion_items\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_accordion_items_parent_id_idx\` ON \`pages_blocks_accordion_items\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_accordion\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`color\` text DEFAULT 'primary',
  	\`heading_tag\` text DEFAULT 'h2',
  	\`accordion_width\` text DEFAULT 'col-lg-8',
  	\`image_id\` integer,
  	\`layout\` text DEFAULT 'accordionImage',
  	\`no_image_filter\` integer DEFAULT false,
  	\`filter_opacity\` text DEFAULT '0.65',
  	\`first_item_open\` integer DEFAULT true,
  	\`block_name\` text,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_accordion_order_idx\` ON \`pages_blocks_accordion\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_accordion_parent_id_idx\` ON \`pages_blocks_accordion\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_accordion_path_idx\` ON \`pages_blocks_accordion\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_accordion_image_idx\` ON \`pages_blocks_accordion\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_tabs_items\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text,
  	\`content\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_tabs\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_tabs_items_order_idx\` ON \`pages_blocks_tabs_items\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_tabs_items_parent_id_idx\` ON \`pages_blocks_tabs_items\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_tabs\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`color\` text DEFAULT 'primary',
  	\`tabs_width\` text DEFAULT 'col-lg-12',
  	\`image_id\` integer,
  	\`layout\` text DEFAULT 'tabsImage',
  	\`no_image_filter\` integer DEFAULT false,
  	\`filter_opacity\` text DEFAULT '0.65',
  	\`block_name\` text,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_tabs_order_idx\` ON \`pages_blocks_tabs\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_tabs_parent_id_idx\` ON \`pages_blocks_tabs\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_tabs_path_idx\` ON \`pages_blocks_tabs\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_tabs_image_idx\` ON \`pages_blocks_tabs\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_text\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`name\` text,
  	\`label\` text,
  	\`required\` integer DEFAULT false,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_text_order_idx\` ON \`pages_blocks_text\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_text_parent_id_idx\` ON \`pages_blocks_text\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_text_path_idx\` ON \`pages_blocks_text\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_email\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`name\` text,
  	\`label\` text,
  	\`required\` integer DEFAULT false,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_email_order_idx\` ON \`pages_blocks_email\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_email_parent_id_idx\` ON \`pages_blocks_email\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_email_path_idx\` ON \`pages_blocks_email\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_textarea\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`name\` text,
  	\`label\` text,
  	\`required\` integer DEFAULT false,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_textarea_order_idx\` ON \`pages_blocks_textarea\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_textarea_parent_id_idx\` ON \`pages_blocks_textarea\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_textarea_path_idx\` ON \`pages_blocks_textarea\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_number\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`name\` text,
  	\`label\` text,
  	\`required\` integer DEFAULT false,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_number_order_idx\` ON \`pages_blocks_number\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_number_parent_id_idx\` ON \`pages_blocks_number\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_number_path_idx\` ON \`pages_blocks_number\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_checkbox\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`name\` text,
  	\`label\` text,
  	\`required\` integer DEFAULT false,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_checkbox_order_idx\` ON \`pages_blocks_checkbox\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_checkbox_parent_id_idx\` ON \`pages_blocks_checkbox\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_checkbox_path_idx\` ON \`pages_blocks_checkbox\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_select_options\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`label\` text,
  	\`value\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_select\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_select_options_order_idx\` ON \`pages_blocks_select_options\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_select_options_parent_id_idx\` ON \`pages_blocks_select_options\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_select\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`name\` text,
  	\`label\` text,
  	\`required\` integer DEFAULT false,
  	\`allow_multiple\` integer DEFAULT false,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_select_order_idx\` ON \`pages_blocks_select\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_select_parent_id_idx\` ON \`pages_blocks_select\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_select_path_idx\` ON \`pages_blocks_select\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_stepper_steps\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text,
  	\`description\` text,
  	\`content_type\` text DEFAULT 'text',
  	\`content\` text,
  	\`form_id\` integer,
  	FOREIGN KEY (\`form_id\`) REFERENCES \`forms\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_stepper\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_stepper_steps_order_idx\` ON \`pages_blocks_stepper_steps\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_stepper_steps_parent_id_idx\` ON \`pages_blocks_stepper_steps\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_stepper_steps_form_idx\` ON \`pages_blocks_stepper_steps\` (\`form_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_stepper\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`color\` text DEFAULT 'primary',
  	\`centered\` integer DEFAULT false,
  	\`image_id\` integer,
  	\`image_filter\` integer DEFAULT false,
  	\`stepper_width\` text DEFAULT '8',
  	\`stepper_position\` text DEFAULT 'left',
  	\`layout_elements\` text DEFAULT '[{"element":"title"},{"element":"description"},{"element":"list"}]',
  	\`block_name\` text,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_stepper_order_idx\` ON \`pages_blocks_stepper\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_stepper_parent_id_idx\` ON \`pages_blocks_stepper\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_stepper_path_idx\` ON \`pages_blocks_stepper\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_stepper_image_idx\` ON \`pages_blocks_stepper\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_cta_buttons\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`text\` text,
  	\`url\` text,
  	\`color\` text DEFAULT 'primary',
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_cta\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_cta_buttons_order_idx\` ON \`pages_blocks_cta_buttons\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_cta_buttons_parent_id_idx\` ON \`pages_blocks_cta_buttons\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_cta\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`alignment\` text DEFAULT 'center',
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_cta_order_idx\` ON \`pages_blocks_cta\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_cta_parent_id_idx\` ON \`pages_blocks_cta\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_cta_path_idx\` ON \`pages_blocks_cta\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_blog_posts_grid\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`title\` text DEFAULT 'En direct de notre blog',
  	\`center_title\` integer DEFAULT true,
  	\`layout\` text DEFAULT 'normal',
  	\`main_color\` text DEFAULT 'primary',
  	\`rows_count\` text DEFAULT '2',
  	\`category_id\` integer,
  	\`block_name\` text,
  	FOREIGN KEY (\`category_id\`) REFERENCES \`categories\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_blog_posts_grid_order_idx\` ON \`pages_blocks_blog_posts_grid\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_blog_posts_grid_parent_id_idx\` ON \`pages_blocks_blog_posts_grid\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_blog_posts_grid_path_idx\` ON \`pages_blocks_blog_posts_grid\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_blog_posts_grid_category_idx\` ON \`pages_blocks_blog_posts_grid\` (\`category_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_logo_slider_logos\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`logo_id\` integer,
  	\`alt\` text,
  	FOREIGN KEY (\`logo_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_logo_slider\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_logo_slider_logos_order_idx\` ON \`pages_blocks_logo_slider_logos\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_logo_slider_logos_parent_id_idx\` ON \`pages_blocks_logo_slider_logos\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_logo_slider_logos_logo_idx\` ON \`pages_blocks_logo_slider_logos\` (\`logo_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_logo_slider\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_logo_slider_order_idx\` ON \`pages_blocks_logo_slider\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_logo_slider_parent_id_idx\` ON \`pages_blocks_logo_slider\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_logo_slider_path_idx\` ON \`pages_blocks_logo_slider\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_ticket_box_tickets\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`icon\` text,
  	\`text\` text,
  	\`link\` text,
  	\`link_text\` text DEFAULT 'En savoir plus',
  	\`color\` text DEFAULT 'primary',
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages_blocks_ticket_box\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_ticket_box_tickets_order_idx\` ON \`pages_blocks_ticket_box_tickets\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_ticket_box_tickets_parent_id_idx\` ON \`pages_blocks_ticket_box_tickets\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`pages_blocks_ticket_box\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` text PRIMARY KEY NOT NULL,
  	\`alignment\` text DEFAULT 'left',
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`pages\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`pages_blocks_ticket_box_order_idx\` ON \`pages_blocks_ticket_box\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_ticket_box_parent_id_idx\` ON \`pages_blocks_ticket_box\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`pages_blocks_ticket_box_path_idx\` ON \`pages_blocks_ticket_box\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_boxed_image\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`height\` text DEFAULT 'normal',
  	\`background_image_id\` integer,
  	\`no_filter\` integer DEFAULT false,
  	\`filter_color\` text DEFAULT 'primary',
  	\`filter_opacity\` text DEFAULT '0.65',
  	\`quote_tag\` text DEFAULT 'h3',
  	\`quote\` text,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`background_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_boxed_image_order_idx\` ON \`_pages_v_blocks_boxed_image\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_boxed_image_parent_id_idx\` ON \`_pages_v_blocks_boxed_image\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_boxed_image_path_idx\` ON \`_pages_v_blocks_boxed_image\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_boxed_image_background_image_idx\` ON \`_pages_v_blocks_boxed_image\` (\`background_image_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_price_list_items_features\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`feature\` text,
  	\`_uuid\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_price_list_items\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_price_list_items_features_order_idx\` ON \`_pages_v_blocks_price_list_items_features\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_price_list_items_features_parent_id_idx\` ON \`_pages_v_blocks_price_list_items_features\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_price_list_items\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`color\` text DEFAULT 'primary',
  	\`thumbnail_image_id\` integer,
  	\`category\` text,
  	\`title_tag\` text DEFAULT 'h2',
  	\`title\` text,
  	\`price\` text,
  	\`description\` text,
  	\`cta_text\` text,
  	\`cta_url\` text,
  	\`_uuid\` text,
  	FOREIGN KEY (\`thumbnail_image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_price_list\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_price_list_items_order_idx\` ON \`_pages_v_blocks_price_list_items\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_price_list_items_parent_id_idx\` ON \`_pages_v_blocks_price_list_items\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_price_list_items_thumbnail_image_idx\` ON \`_pages_v_blocks_price_list_items\` (\`thumbnail_image_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_price_list\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_price_list_order_idx\` ON \`_pages_v_blocks_price_list\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_price_list_parent_id_idx\` ON \`_pages_v_blocks_price_list\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_price_list_path_idx\` ON \`_pages_v_blocks_price_list\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_accordion_items\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`title\` text,
  	\`content\` text,
  	\`_uuid\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_accordion\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_accordion_items_order_idx\` ON \`_pages_v_blocks_accordion_items\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_accordion_items_parent_id_idx\` ON \`_pages_v_blocks_accordion_items\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_accordion\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`color\` text DEFAULT 'primary',
  	\`heading_tag\` text DEFAULT 'h2',
  	\`accordion_width\` text DEFAULT 'col-lg-8',
  	\`image_id\` integer,
  	\`layout\` text DEFAULT 'accordionImage',
  	\`no_image_filter\` integer DEFAULT false,
  	\`filter_opacity\` text DEFAULT '0.65',
  	\`first_item_open\` integer DEFAULT true,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_accordion_order_idx\` ON \`_pages_v_blocks_accordion\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_accordion_parent_id_idx\` ON \`_pages_v_blocks_accordion\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_accordion_path_idx\` ON \`_pages_v_blocks_accordion\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_accordion_image_idx\` ON \`_pages_v_blocks_accordion\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_tabs_items\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`title\` text,
  	\`content\` text,
  	\`_uuid\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_tabs\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_tabs_items_order_idx\` ON \`_pages_v_blocks_tabs_items\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_tabs_items_parent_id_idx\` ON \`_pages_v_blocks_tabs_items\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_tabs\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`color\` text DEFAULT 'primary',
  	\`tabs_width\` text DEFAULT 'col-lg-12',
  	\`image_id\` integer,
  	\`layout\` text DEFAULT 'tabsImage',
  	\`no_image_filter\` integer DEFAULT false,
  	\`filter_opacity\` text DEFAULT '0.65',
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_tabs_order_idx\` ON \`_pages_v_blocks_tabs\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_tabs_parent_id_idx\` ON \`_pages_v_blocks_tabs\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_tabs_path_idx\` ON \`_pages_v_blocks_tabs\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_tabs_image_idx\` ON \`_pages_v_blocks_tabs\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_text\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`name\` text,
  	\`label\` text,
  	\`required\` integer DEFAULT false,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_text_order_idx\` ON \`_pages_v_blocks_text\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_text_parent_id_idx\` ON \`_pages_v_blocks_text\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_text_path_idx\` ON \`_pages_v_blocks_text\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_email\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`name\` text,
  	\`label\` text,
  	\`required\` integer DEFAULT false,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_email_order_idx\` ON \`_pages_v_blocks_email\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_email_parent_id_idx\` ON \`_pages_v_blocks_email\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_email_path_idx\` ON \`_pages_v_blocks_email\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_textarea\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`name\` text,
  	\`label\` text,
  	\`required\` integer DEFAULT false,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_textarea_order_idx\` ON \`_pages_v_blocks_textarea\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_textarea_parent_id_idx\` ON \`_pages_v_blocks_textarea\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_textarea_path_idx\` ON \`_pages_v_blocks_textarea\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_number\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`name\` text,
  	\`label\` text,
  	\`required\` integer DEFAULT false,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_number_order_idx\` ON \`_pages_v_blocks_number\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_number_parent_id_idx\` ON \`_pages_v_blocks_number\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_number_path_idx\` ON \`_pages_v_blocks_number\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_checkbox\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`name\` text,
  	\`label\` text,
  	\`required\` integer DEFAULT false,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_checkbox_order_idx\` ON \`_pages_v_blocks_checkbox\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_checkbox_parent_id_idx\` ON \`_pages_v_blocks_checkbox\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_checkbox_path_idx\` ON \`_pages_v_blocks_checkbox\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_select_options\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`label\` text,
  	\`value\` text,
  	\`_uuid\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_select\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_select_options_order_idx\` ON \`_pages_v_blocks_select_options\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_select_options_parent_id_idx\` ON \`_pages_v_blocks_select_options\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_select\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`name\` text,
  	\`label\` text,
  	\`required\` integer DEFAULT false,
  	\`allow_multiple\` integer DEFAULT false,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_select_order_idx\` ON \`_pages_v_blocks_select\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_select_parent_id_idx\` ON \`_pages_v_blocks_select\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_select_path_idx\` ON \`_pages_v_blocks_select\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_stepper_steps\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`title\` text,
  	\`description\` text,
  	\`content_type\` text DEFAULT 'text',
  	\`content\` text,
  	\`form_id\` integer,
  	\`_uuid\` text,
  	FOREIGN KEY (\`form_id\`) REFERENCES \`forms\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_stepper\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_stepper_steps_order_idx\` ON \`_pages_v_blocks_stepper_steps\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_stepper_steps_parent_id_idx\` ON \`_pages_v_blocks_stepper_steps\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_stepper_steps_form_idx\` ON \`_pages_v_blocks_stepper_steps\` (\`form_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_stepper\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`color\` text DEFAULT 'primary',
  	\`centered\` integer DEFAULT false,
  	\`image_id\` integer,
  	\`image_filter\` integer DEFAULT false,
  	\`stepper_width\` text DEFAULT '8',
  	\`stepper_position\` text DEFAULT 'left',
  	\`layout_elements\` text DEFAULT '[{"element":"title"},{"element":"description"},{"element":"list"}]',
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`image_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_stepper_order_idx\` ON \`_pages_v_blocks_stepper\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_stepper_parent_id_idx\` ON \`_pages_v_blocks_stepper\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_stepper_path_idx\` ON \`_pages_v_blocks_stepper\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_stepper_image_idx\` ON \`_pages_v_blocks_stepper\` (\`image_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_cta_buttons\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`text\` text,
  	\`url\` text,
  	\`color\` text DEFAULT 'primary',
  	\`_uuid\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_cta\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_cta_buttons_order_idx\` ON \`_pages_v_blocks_cta_buttons\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_cta_buttons_parent_id_idx\` ON \`_pages_v_blocks_cta_buttons\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_cta\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`alignment\` text DEFAULT 'center',
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_cta_order_idx\` ON \`_pages_v_blocks_cta\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_cta_parent_id_idx\` ON \`_pages_v_blocks_cta\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_cta_path_idx\` ON \`_pages_v_blocks_cta\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_blog_posts_grid\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`title\` text DEFAULT 'En direct de notre blog',
  	\`center_title\` integer DEFAULT true,
  	\`layout\` text DEFAULT 'normal',
  	\`main_color\` text DEFAULT 'primary',
  	\`rows_count\` text DEFAULT '2',
  	\`category_id\` integer,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`category_id\`) REFERENCES \`categories\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_blog_posts_grid_order_idx\` ON \`_pages_v_blocks_blog_posts_grid\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_blog_posts_grid_parent_id_idx\` ON \`_pages_v_blocks_blog_posts_grid\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_blog_posts_grid_path_idx\` ON \`_pages_v_blocks_blog_posts_grid\` (\`_path\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_blog_posts_grid_category_idx\` ON \`_pages_v_blocks_blog_posts_grid\` (\`category_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_logo_slider_logos\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`logo_id\` integer,
  	\`alt\` text,
  	\`_uuid\` text,
  	FOREIGN KEY (\`logo_id\`) REFERENCES \`media\`(\`id\`) ON UPDATE no action ON DELETE set null,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_logo_slider\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_logo_slider_logos_order_idx\` ON \`_pages_v_blocks_logo_slider_logos\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_logo_slider_logos_parent_id_idx\` ON \`_pages_v_blocks_logo_slider_logos\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_logo_slider_logos_logo_idx\` ON \`_pages_v_blocks_logo_slider_logos\` (\`logo_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_logo_slider\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_logo_slider_order_idx\` ON \`_pages_v_blocks_logo_slider\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_logo_slider_parent_id_idx\` ON \`_pages_v_blocks_logo_slider\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_logo_slider_path_idx\` ON \`_pages_v_blocks_logo_slider\` (\`_path\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_ticket_box_tickets\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`icon\` text,
  	\`text\` text,
  	\`link\` text,
  	\`link_text\` text DEFAULT 'En savoir plus',
  	\`color\` text DEFAULT 'primary',
  	\`_uuid\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v_blocks_ticket_box\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_ticket_box_tickets_order_idx\` ON \`_pages_v_blocks_ticket_box_tickets\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_ticket_box_tickets_parent_id_idx\` ON \`_pages_v_blocks_ticket_box_tickets\` (\`_parent_id\`);`)
  await db.run(sql`CREATE TABLE \`_pages_v_blocks_ticket_box\` (
  	\`_order\` integer NOT NULL,
  	\`_parent_id\` integer NOT NULL,
  	\`_path\` text NOT NULL,
  	\`id\` integer PRIMARY KEY NOT NULL,
  	\`alignment\` text DEFAULT 'left',
  	\`_uuid\` text,
  	\`block_name\` text,
  	FOREIGN KEY (\`_parent_id\`) REFERENCES \`_pages_v\`(\`id\`) ON UPDATE no action ON DELETE cascade
  );
  `)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_ticket_box_order_idx\` ON \`_pages_v_blocks_ticket_box\` (\`_order\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_ticket_box_parent_id_idx\` ON \`_pages_v_blocks_ticket_box\` (\`_parent_id\`);`)
  await db.run(sql`CREATE INDEX \`_pages_v_blocks_ticket_box_path_idx\` ON \`_pages_v_blocks_ticket_box\` (\`_path\`);`)
  await db.run(sql`ALTER TABLE \`pages_blocks_title_text_no_boxing\` ADD \`cta_text\` text;`)
  await db.run(sql`ALTER TABLE \`pages_blocks_title_text_no_boxing\` ADD \`cta_url\` text;`)
  await db.run(sql`ALTER TABLE \`pages_blocks_title_text_no_boxing\` ADD \`padding_top\` text DEFAULT '4';`)
  await db.run(sql`ALTER TABLE \`pages_blocks_title_text_no_boxing\` ADD \`padding_bottom\` text DEFAULT '4';`)
  await db.run(sql`ALTER TABLE \`pages_blocks_text_image_container\` ADD \`layout\` text DEFAULT 'textImage';`)
  await db.run(sql`ALTER TABLE \`pages_blocks_text_image_container\` ADD \`no_image_filter\` integer DEFAULT false;`)
  await db.run(sql`ALTER TABLE \`pages_blocks_text_image_container\` ADD \`cta_text\` text;`)
  await db.run(sql`ALTER TABLE \`pages_blocks_text_image_container\` ADD \`cta_url\` text;`)
  await db.run(sql`ALTER TABLE \`_pages_v_blocks_title_text_no_boxing\` ADD \`cta_text\` text;`)
  await db.run(sql`ALTER TABLE \`_pages_v_blocks_title_text_no_boxing\` ADD \`cta_url\` text;`)
  await db.run(sql`ALTER TABLE \`_pages_v_blocks_title_text_no_boxing\` ADD \`padding_top\` text DEFAULT '4';`)
  await db.run(sql`ALTER TABLE \`_pages_v_blocks_title_text_no_boxing\` ADD \`padding_bottom\` text DEFAULT '4';`)
  await db.run(sql`ALTER TABLE \`_pages_v_blocks_text_image_container\` ADD \`layout\` text DEFAULT 'textImage';`)
  await db.run(sql`ALTER TABLE \`_pages_v_blocks_text_image_container\` ADD \`no_image_filter\` integer DEFAULT false;`)
  await db.run(sql`ALTER TABLE \`_pages_v_blocks_text_image_container\` ADD \`cta_text\` text;`)
  await db.run(sql`ALTER TABLE \`_pages_v_blocks_text_image_container\` ADD \`cta_url\` text;`)
  await db.run(sql`ALTER TABLE \`posts\` ADD \`main_color\` text DEFAULT 'primary';`)
  await db.run(sql`ALTER TABLE \`_posts_v\` ADD \`version_main_color\` text DEFAULT 'primary';`)
  await db.run(sql`ALTER TABLE \`forms_blocks_select\` ADD \`allow_multiple\` integer DEFAULT false;`)
  await db.run(sql`ALTER TABLE \`forms\` ADD \`main_color\` text DEFAULT 'primary' NOT NULL;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.run(sql`DROP TABLE \`pages_blocks_boxed_image\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_price_list_items_features\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_price_list_items\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_price_list\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_accordion_items\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_accordion\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_tabs_items\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_tabs\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_text\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_email\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_textarea\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_number\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_checkbox\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_select_options\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_select\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_stepper_steps\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_stepper\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_cta_buttons\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_cta\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_blog_posts_grid\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_logo_slider_logos\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_logo_slider\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_ticket_box_tickets\`;`)
  await db.run(sql`DROP TABLE \`pages_blocks_ticket_box\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_boxed_image\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_price_list_items_features\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_price_list_items\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_price_list\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_accordion_items\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_accordion\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_tabs_items\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_tabs\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_text\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_email\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_textarea\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_number\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_checkbox\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_select_options\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_select\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_stepper_steps\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_stepper\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_cta_buttons\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_cta\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_blog_posts_grid\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_logo_slider_logos\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_logo_slider\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_ticket_box_tickets\`;`)
  await db.run(sql`DROP TABLE \`_pages_v_blocks_ticket_box\`;`)
  await db.run(sql`ALTER TABLE \`pages_blocks_title_text_no_boxing\` DROP COLUMN \`cta_text\`;`)
  await db.run(sql`ALTER TABLE \`pages_blocks_title_text_no_boxing\` DROP COLUMN \`cta_url\`;`)
  await db.run(sql`ALTER TABLE \`pages_blocks_title_text_no_boxing\` DROP COLUMN \`padding_top\`;`)
  await db.run(sql`ALTER TABLE \`pages_blocks_title_text_no_boxing\` DROP COLUMN \`padding_bottom\`;`)
  await db.run(sql`ALTER TABLE \`pages_blocks_text_image_container\` DROP COLUMN \`layout\`;`)
  await db.run(sql`ALTER TABLE \`pages_blocks_text_image_container\` DROP COLUMN \`no_image_filter\`;`)
  await db.run(sql`ALTER TABLE \`pages_blocks_text_image_container\` DROP COLUMN \`cta_text\`;`)
  await db.run(sql`ALTER TABLE \`pages_blocks_text_image_container\` DROP COLUMN \`cta_url\`;`)
  await db.run(sql`ALTER TABLE \`_pages_v_blocks_title_text_no_boxing\` DROP COLUMN \`cta_text\`;`)
  await db.run(sql`ALTER TABLE \`_pages_v_blocks_title_text_no_boxing\` DROP COLUMN \`cta_url\`;`)
  await db.run(sql`ALTER TABLE \`_pages_v_blocks_title_text_no_boxing\` DROP COLUMN \`padding_top\`;`)
  await db.run(sql`ALTER TABLE \`_pages_v_blocks_title_text_no_boxing\` DROP COLUMN \`padding_bottom\`;`)
  await db.run(sql`ALTER TABLE \`_pages_v_blocks_text_image_container\` DROP COLUMN \`layout\`;`)
  await db.run(sql`ALTER TABLE \`_pages_v_blocks_text_image_container\` DROP COLUMN \`no_image_filter\`;`)
  await db.run(sql`ALTER TABLE \`_pages_v_blocks_text_image_container\` DROP COLUMN \`cta_text\`;`)
  await db.run(sql`ALTER TABLE \`_pages_v_blocks_text_image_container\` DROP COLUMN \`cta_url\`;`)
  await db.run(sql`ALTER TABLE \`posts\` DROP COLUMN \`main_color\`;`)
  await db.run(sql`ALTER TABLE \`_posts_v\` DROP COLUMN \`version_main_color\`;`)
  await db.run(sql`ALTER TABLE \`forms_blocks_select\` DROP COLUMN \`allow_multiple\`;`)
  await db.run(sql`ALTER TABLE \`forms\` DROP COLUMN \`main_color\`;`)
}
