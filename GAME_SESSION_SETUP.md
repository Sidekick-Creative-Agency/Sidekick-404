# Game Session Token System

## Overview

This implementation adds a session token system to prevent casual cheating by validating that users actually played the game before submitting scores.

## How It Works

1. **Game Start**: When a player starts the game, the client requests a session token from `/api/game/start`
2. **Token Storage**: The server generates a UUID token and stores it in Cloudflare KV with:
    - Start timestamp
    - Used status (initially false)
    - 1 hour expiration
3. **Score Submission**: When submitting to the leaderboard, the token is included
4. **Validation**: The server validates:
    - Token exists and hasn't expired
    - Token hasn't been used before
    - Minimum play time (10 seconds)
    - Score doesn't exceed maximum possible (2000 points × level)

## Setup Instructions

### 1. Create KV Namespace

```bash
# For development
npx wrangler kv:namespace create GAME_SESSIONS

# For production
npx wrangler kv:namespace create GAME_SESSIONS --env production
```

This will output something like:

```
Created namespace with id "abcd1234..."
```

### 2. Update wrangler.json

Replace `YOUR_KV_NAMESPACE_ID` in `wrangler.json` with the ID from step 1:

```json
"kv_namespaces": [
    {
        "binding": "GAME_SESSIONS",
        "id": "abcd1234..."
    }
]
```

### 3. Deploy

```bash
npm run deploy
```

## Security Features

✅ **Session tokens**: Each game gets a unique token that can only be used once
✅ **Time validation**: Games must last at least 10 seconds
✅ **Score validation**: Score cannot exceed 2000 × level
✅ **Token expiration**: Sessions expire after 1 hour
✅ **One-time use**: Tokens are marked as used after submission

## Limitations

⚠️ **Not cheat-proof**: Determined users can still:

- Inspect network requests and generate their own tokens
- Modify game logic in browser memory
- Use browser dev tools to manipulate state

This system stops **casual cheating** and makes it annoying enough that most people won't bother.

## Testing

### Test Valid Submission

1. Start a game normally
2. Play for at least 10 seconds
3. Submit score with initials
4. ✅ Should succeed

### Test Invalid Submissions

```bash
# Test without token (should still work for backwards compatibility)
curl -X POST http://localhost:4321/api/leaderboard \
  -H "Content-Type: application/json" \
  -d '{"initials":"ABC","score":1000,"level":1,"powerups_enabled":false}'

# Test with invalid token
curl -X POST http://localhost:4321/api/leaderboard \
  -H "Content-Type: application/json" \
  -d '{"initials":"ABC","score":1000,"level":1,"powerups_enabled":false,"token":"invalid"}'

# Test with excessive score
curl -X POST http://localhost:4321/api/leaderboard \
  -H "Content-Type: application/json" \
  -d '{"initials":"ABC","score":10000,"level":1,"powerups_enabled":false,"token":"valid-token"}'
```

## Monitoring

Check KV storage usage in Cloudflare dashboard:

- Workers & Pages > KV > GAME_SESSIONS

Each session takes ~100 bytes, so 10k concurrent games = ~1MB

## Future Enhancements

Consider adding:

- Rate limiting per IP address
- CAPTCHA for suspicious scores
- Server-side game state tracking
- Replay validation
- Admin dashboard for manual review
