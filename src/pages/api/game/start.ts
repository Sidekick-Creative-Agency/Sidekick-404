import type { APIRoute } from 'astro';

const corsHeaders = {
	'Access-Control-Allow-Origin': '*',
	'Access-Control-Allow-Methods': 'POST,OPTIONS',
	'Access-Control-Allow-Headers': 'Content-Type',
};

export const OPTIONS: APIRoute = async () => {
	return new Response(null, {
		headers: corsHeaders,
	});
};

export const POST: APIRoute = async ({ locals }) => {
	try {
		// Generate a unique token
		const token = crypto.randomUUID();
		const startTime = Date.now();

		// Get KV namespace from runtime (you'll need to configure this in wrangler.toml)
		const KV = locals.runtime?.env?.GAME_SESSIONS;

		if (KV) {
			// Store session data in KV with 1 hour expiration
			await KV.put(
				token,
				JSON.stringify({
					startTime,
					used: false,
				}),
				{ expirationTtl: 3600 },
			);
		}

		return new Response(JSON.stringify({ token, startTime }), {
			status: 200,
			headers: {
				...corsHeaders,
				'Content-Type': 'application/json',
			},
		});
	} catch (error) {
		console.error('Error creating game session:', error);
		return new Response(JSON.stringify({ error: 'Failed to create game session' }), {
			status: 500,
			headers: {
				...corsHeaders,
				'Content-Type': 'application/json',
			},
		});
	}
};
