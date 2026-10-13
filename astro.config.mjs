import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Deploy target:
//   - GitHub *project* page (e.g. zouhir-dahbi.github.io/hcg-consulting):
//       SITE_URL  = https://zouhir-dahbi.github.io/hcg-consulting
//       BASE_PATH = /hcg-consulting
//   - Custom domain on Cloudflare (apex, no subpath):
//       SITE_URL  = https://yourdomain.com
//       BASE_PATH = /
// Both are already wired through the env vars below, so flipping domains
// is a one-line change in the build step of .github/workflows/deploy.yml.
const SITE = process.env.SITE_URL || 'https://zouhir-dahbi.github.io/hcg-consulting';
// Default to the GitHub project page so local builds match the deploy target.
// On a custom domain, set BASE_PATH="/" in the build workflow.
const BASE = process.env.BASE_PATH || '/hcg-consulting';

// Markdown links are written as absolute site paths (e.g. /expert-witness).
// This plugin prefixes them with the build-time base so they resolve on a
// GitHub project page. No-op when BASE is the apex "/".
function rehypeBase() {
  const prefix = BASE === '/' ? '' : BASE;
  return (tree) => {
    const walk = (node) => {
      if (!node || typeof node !== 'object') return;
      if (node.type === 'element' && node.tagName === 'a' && node.properties) {
        const href = node.properties.href;
        if (typeof href === 'string' && href.startsWith('/') && !href.startsWith('//') && prefix) {
          node.properties.href = `${prefix}${href}`;
        }
      }
      if (Array.isArray(node.children)) node.children.forEach(walk);
    };
    walk(tree);
  };
}

export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: 'ignore',
  markdown: {
    rehypePlugins: [rehypeBase],
  },
  integrations: [sitemap()],
});
