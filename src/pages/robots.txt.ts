import type { APIRoute } from 'astro';

const allow = ['User-agent: *', 'Allow: /', ''];

/** Search and answer-engine crawlers. Training-only crawlers are left to the default allow rule. */
const bots = ['GPTBot', 'ChatGPT-User', 'OAI-SearchBot', 'PerplexityBot', 'ClaudeBot', 'anthropic-ai', 'Google-Extended', 'Bingbot'];

export const GET: APIRoute = ({ site }) => {
  const lines = [
    ...allow,
    ...bots.flatMap((bot) => ['User-agent: ' + bot, 'Allow: /', '']),
  ];
  if (site) lines.push(`Sitemap: ${new URL('sitemap-index.xml', site).href}`);
  return new Response(lines.join('\n'), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
