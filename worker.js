export default {
  async fetch(request, env) {
    if (request.method === "OPTIONS") {
      return new Response(null, { headers: corsHeaders() });
    }
    if (request.method !== "POST") {
      return json({ error: "POST only" }, 405);
    }

    const body = await request.json();
    const apiKey = env.DEEPSEEK_API_KEY || request.headers.get("X-User-Api-Key");
    if (!apiKey) return json({ error: "Missing API key" }, 401);

    const upstream = env.DEEPSEEK_BASE_URL || "https://api.deepseek.com/chat/completions";
    const response = await fetch(upstream, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify(body)
    });

    return new Response(await response.text(), {
      status: response.status,
      headers: {
        ...corsHeaders(),
        "Content-Type": response.headers.get("Content-Type") || "application/json"
      }
    });
  }
};

function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization, X-User-Api-Key"
  };
}

function json(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...corsHeaders(), "Content-Type": "application/json" }
  });
}
