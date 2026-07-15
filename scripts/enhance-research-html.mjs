import { readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const papers = [
  {
    slug: "sovereign-ai-and-european-strategic-infrastructure",
    pdf: "/research/papers/sovereign-ai-and-european-strategic-infrastructure.pdf",
  },
  {
    slug: "the-intelligence-company-builder",
    pdf: "/research/papers/the-intelligence-company-builder.pdf",
  },
  {
    slug: "from-information-to-enterprise",
    pdf: "/research/papers/from-information-to-enterprise.pdf",
  },
  {
    slug: "the-architecture-of-intelligence-led-company-creation",
  },
  {
    slug: "european-energy-intelligence-landscape",
  },
];

const enhancementStyles = `
<style data-black-research-enhancement>
  html{scroll-behavior:smooth;scroll-padding-top:86px}
  body{padding-top:64px}
  .black-research-bar{position:fixed;z-index:1000;top:0;left:0;right:0;min-height:64px;padding:12px clamp(18px,4vw,56px);display:flex;align-items:center;justify-content:space-between;gap:16px;background:rgba(8,9,9,.96);border-bottom:1px solid rgba(255,255,255,.14);backdrop-filter:blur(16px);font-family:Arial,sans-serif}
  .black-research-brand{color:#fff;text-decoration:none;font-size:20px;letter-spacing:.02em;font-weight:700}
  .black-research-nav{display:flex;align-items:center;gap:10px}
  .black-research-nav a{color:#d8d8d3;text-decoration:none;border:1px solid rgba(255,255,255,.18);padding:9px 13px;border-radius:999px;font-size:12px;line-height:1;white-space:nowrap}
  .black-research-nav a:hover{color:#fff;border-color:#c9a24b}
  .exhibit-fallback{min-height:180px;padding:32px;margin:0 auto;border:1px solid #d8d4c9;background:linear-gradient(145deg,#f8f6ef,#eeebe2);display:flex;flex-direction:column;align-items:flex-start;justify-content:center;text-align:left;font-family:Arial,sans-serif}
  .exhibit-fallback span{color:#8c6a22;font-size:11px;letter-spacing:.16em;text-transform:uppercase;font-weight:700}
  .exhibit-fallback strong{display:block;margin-top:10px;color:#222;font-size:18px;line-height:1.35}
  .exhibit-fallback small{display:block;margin-top:12px;color:#6e6e6e;font-size:12px;line-height:1.5}
  .black-research-footer-actions{display:flex;flex-wrap:wrap;gap:10px;margin-top:24px}
  .black-research-footer-actions a{display:inline-flex;color:#f2f0ea;text-decoration:none;border:1px solid #c9a24b;padding:10px 14px;border-radius:999px}
  @media(max-width:700px){body{padding-top:58px}.black-research-bar{min-height:58px}.black-research-brand{font-size:17px}.black-research-nav a{padding:8px 10px}.black-research-profile{display:none}.hero{padding-top:56px!important}.meta-strip{gap:18px!important}.meta-strip div{width:calc(50% - 9px)}p{text-align:left!important}table{display:block;overflow-x:auto}.exhibit-fallback{min-height:140px;padding:22px}}
</style>`;

const fallbackScript = `
<script data-black-research-enhancement>
  document.querySelectorAll('figure img').forEach(function (image) {
    image.addEventListener('error', function () {
      var fallback = document.createElement('div');
      fallback.className = 'exhibit-fallback';
      fallback.innerHTML = '<span>Exhibit description</span><strong></strong><small>The referenced chart asset was not included in this web release. The surrounding analysis and source attribution remain available.</small>';
      fallback.querySelector('strong').textContent = image.alt || 'Research exhibit';
      image.replaceWith(fallback);
    });
  });
</script>`;

for (const paper of papers) {
  const file = join(root, "public", "research", "read", `${paper.slug}.html`);
  let html = await readFile(file, "utf8");

  if (html.includes("data-black-research-enhancement")) continue;

  const canonical = `https://blackandi.com/research/read/${paper.slug}`;
  html = html.replace(/<link\s+rel=["']canonical["'][^>]*>\s*/gi, "");
  html = html.replaceAll(
    `https://blackandi.com/research/${paper.slug}/`,
    canonical,
  );
  html = html.replace(
    "</head>",
    `<link rel="canonical" href="${canonical}">\n${enhancementStyles}\n</head>`,
  );
  html = html.replace(
    "<body>",
    `<body>\n<div class="black-research-bar"><a class="black-research-brand" href="/">BLACK&</a><nav class="black-research-nav" aria-label="Research navigation"><a href="/research">Research hub</a><a class="black-research-profile" href="/research/reports/${paper.slug}">Research profile</a></nav></div>`,
  );

  const footerActions = `<div class="black-research-footer-actions"><a href="/research/reports/${paper.slug}">Research profile</a><a href="/research">All BLACK& Research</a></div>`;

  html = html.replace(
    /<p><a href="[^"]+\.pdf"[^>]*>Download PDF version →<\/a><\/p>/,
    footerActions,
  );
  html = html.replace("</body>", `${fallbackScript}\n</body>`);
  await writeFile(file, html);
}
