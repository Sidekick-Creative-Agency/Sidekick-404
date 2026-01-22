import type { APIRoute } from 'astro';
import { desc } from 'drizzle-orm';
import { getDb } from '../../../db';
import { leaderboard } from '../../../db/schema';

type LeaderboardObject = {
	initials: string;
	score: number;
	level: number;
	powerups_enabled: boolean;
};

const corsHeaders = {
	'Access-Control-Allow-Origin': '*', // Or specify your domain instead of *
	'Access-Control-Allow-Methods': 'GET,POST,OPTIONS',
	'Access-Control-Allow-Headers': 'Content-Type',
};

export const OPTIONS: APIRoute = async () => {
	return new Response(null, {
		headers: corsHeaders,
	});
};
export const POST: APIRoute = async ({ request, locals }) => {
	try {
		const { initials, score, level, powerups_enabled }: LeaderboardObject = await request.json();

		// Validate input
		if (!initials || typeof initials !== 'string' || initials.length > 3) {
			return new Response(JSON.stringify({ error: 'Invalid initials' }), { status: 400, headers: { 'Content-Type': 'application/json' } });
		}

		if (typeof score !== 'number' || typeof level !== 'number') {
			return new Response(JSON.stringify({ error: 'Invalid score or level' }), { status: 400, headers: { 'Content-Type': 'application/json' } });
		}

		if (typeof score !== 'number' || typeof level !== 'number') {
			return new Response(JSON.stringify({ error: 'Invalid score or level' }), { status: 400, headers: { 'Content-Type': 'application/json' } });
		}

		if (typeof powerups_enabled !== 'boolean') {
			return new Response(JSON.stringify({ error: 'Invalid powerups_enabled' }), { status: 400, headers: { 'Content-Type': 'application/json' } });
		}

		// Get D1 database from runtime
		const db = getDb(locals);

		// Insert the leaderboard entry
		const result = await db
			.insert(leaderboard)
			.values({
				initials: initials.toUpperCase(),
				score,
				level,
				powerups_enabled: powerups_enabled,
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
		const db = getDb(locals);

		// Get top 10 scores
		const topScores = await db.select().from(leaderboard).orderBy(desc(leaderboard.score)).limit(10);

		return new Response(JSON.stringify({ success: true, leaderboard: topScores }), { status: 200, headers: { 'Content-Type': 'application/json' } });
	} catch (error) {
		console.error('Error fetching leaderboard:', error);
		return new Response(JSON.stringify({ error: 'Failed to fetch leaderboard' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
	}
};
