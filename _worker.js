/**
 * SPA Fallback Handler for Cloudflare Workers
 * Redirects all non-asset requests to index.html for client-side routing
 */

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);

    // Allow asset requests to go through normally
    if (
      url.pathname.startsWith("/assets/") ||
      url.pathname.endsWith(".js") ||
      url.pathname.endsWith(".css") ||
      url.pathname.endsWith(".woff2") ||
      url.pathname.endsWith(".woff") ||
      url.pathname.endsWith(".ttf") ||
      url.pathname.endsWith(".png") ||
      url.pathname.endsWith(".jpg") ||
      url.pathname.endsWith(".svg") ||
      url.pathname.endsWith(".ico")
    ) {
      return env.ASSETS.fetch(request);
    }

    // For all other requests, serve index.html (SPA fallback)
    const indexResponse = await env.ASSETS.fetch(
      new Request(new URL("/index.html", url).toString(), {
        method: "GET",
      })
    );

    // Return with 200 status (not 404) so React Router can handle the URL
    return new Response(indexResponse.body, {
      status: 200,
      statusText: "OK",
      headers: {
        "content-type": "text/html; charset=utf-8",
        "cache-control": "no-cache, no-store, must-revalidate",
        "x-content-type-options": "nosniff",
        "x-frame-options": "SAMEORIGIN",
        "x-xss-protection": "1; mode=block",
      },
    });
  },
};
