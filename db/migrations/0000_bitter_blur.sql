CREATE TABLE `leaderboard` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`initials` text NOT NULL,
	`score` integer NOT NULL,
	`level` integer NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);

CREATE INDEX `idx_score` ON `leaderboard` (`score` DESC);