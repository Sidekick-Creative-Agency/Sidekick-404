import type { APIRoute } from 'astro';
import { desc } from 'drizzle-orm';
import { createDb, leaderboard } from '../../../db';

export const POST: APIRoute = async ({ request, locals }) => {
	try {
		const { initials, score, level } = await request.json();

		// Validate input
		if (!initials || typeof initials !== 'string' || initials.length > 3) {
			return new Response(JSON.stringify({ error: 'Invalid initials' }), { status: 400, headers: { 'Content-Type': 'application/json' } });
		}

		if (typeof score !== 'number' || typeof level !== 'number') {
			return new Response(JSON.stringify({ error: 'Invalid score or level' }), { status: 400, headers: { 'Content-Type': 'application/json' } });
		}

		// Get D1 database from runtime
		const runtime = locals.runtime as { env: { DB: D1Database } };
		const db = createDb(runtime.env.DB);

		// Insert the leaderboard entry
		const result = await db
			.insert(leaderboard)
			.values({
				initials: initials.toUpperCase(),
				score,
				level,
			})
			.returning();

		return new Response(JSON.stringify({ success: true, entry: result[0] }), { status: 201, headers: { 'Content-Type': 'application/json' } });
	} catch (error) {
		console.error('Error saving leaderboard entry:', error);
		return new Response(JSON.stringify({ error: 'Failed to save leaderboard entry' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
	}
};

export const GET: APIRoute = async ({ locals }) => {
	try {
		// Get D1 database from runtime
		const runtime = locals.runtime as { env: { DB: D1Database } };
		const db = createDb(runtime.env.DB);

		// Get top 10 scores
		const topScores = await db.select().from(leaderboard).orderBy(desc(leaderboard.score)).limit(10);

		return new Response(JSON.stringify({ success: true, leaderboard: topScores }), { status: 200, headers: { 'Content-Type': 'application/json' } });
	} catch (error) {
		console.error('Error fetching leaderboard:', error);
		return new Response(JSON.stringify({ error: 'Failed to fetch leaderboard' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
	}
};
