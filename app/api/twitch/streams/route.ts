export async function GET() {
  // Step 1: Get Twitch OAuth token
  const tokenRes = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || ''}/api/twitch/token`);
  const tokenData = await tokenRes.json();
  const accessToken = tokenData.access_token;

  const clientId = process.env.TWITCH_CLIENT_ID!;
  const gameName = 'Dark and Darker';

  // Step 2: Get Game ID with exact name match
  const gameRes = await fetch(
    `https://api.twitch.tv/helix/search/categories?query=${encodeURIComponent(gameName)}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Client-Id': clientId,
      },
    }
  );

  const gameData = await gameRes.json();
  console.log('🐛 Full Twitch Game Response:', gameData);

  const match = gameData?.data?.find((game: { name: string }) =>
    game.name.trim().toLowerCase() === 'dark and darker'
  );
  const gameId = match?.id;

  if (!gameId) {
    return Response.json({ error: 'Game not found' }, { status: 404 });
  }

  // Step 3: Fetch up to 100 streams
  const streamRes = await fetch(
    `https://api.twitch.tv/helix/streams?game_id=${gameId}&first=100`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Client-Id': clientId,
      },
    }
  );

  const streamData = await streamRes.json();

  // Sort by viewer count descending
  const sorted = streamData.data?.sort(
    (a: { viewer_count: number }, b: { viewer_count: number }) =>
      b.viewer_count - a.viewer_count
  );

  return Response.json({ data: sorted });
}
