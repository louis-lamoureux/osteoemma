/**
 * Static assets serve one French 404.html for every miss.
 * Requests under /en get the English not-found page instead, still with status 404.
 */
export default {
  async fetch(request, env) {
    const response = await env.ASSETS.fetch(request);
    if (response.status !== 404) return response;

    const path = new URL(request.url).pathname;
    const english = path === '/en' || path.startsWith('/en/');
    if (!english) return response;

    const localized = await env.ASSETS.fetch(new URL('/en/404/', request.url));
    return new Response(localized.body, {
      status: 404,
      headers: localized.headers,
    });
  },
};
