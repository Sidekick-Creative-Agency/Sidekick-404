import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';
import { sql } from 'drizzle-orm';

export const leaderboard = sqliteTable('leaderboard', {
	id: integer('id').primaryKey({ autoIncrement: true }),
	initials: text('initials').notNull(),
	score: integer('score').notNull(),
	level: integer('level').notNull(),
	powerups_enabled: integer('powerups_enabled', { mode: 'boolean' }).notNull(),
	createdAt: text('created_at')
		.notNull()
		.default(sql`CURRENT_TIMESTAMP`),
});

export type Leaderboard = typeof leaderboard.$inferSelect;
export type NewLeaderboard = typeof leaderboard.$inferInsert;
