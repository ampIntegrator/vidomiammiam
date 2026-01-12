import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-sqlite'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.run(sql`ALTER TABLE \`pages_blocks_title_text_no_boxing\` ADD \`center\` integer DEFAULT false;`)
  await db.run(sql`ALTER TABLE \`_pages_v_blocks_title_text_no_boxing\` ADD \`center\` integer DEFAULT false;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.run(sql`ALTER TABLE \`pages_blocks_title_text_no_boxing\` DROP COLUMN \`center\`;`)
  await db.run(sql`ALTER TABLE \`_pages_v_blocks_title_text_no_boxing\` DROP COLUMN \`center\`;`)
}
