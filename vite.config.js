import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';
import fs from 'fs';

function buniaSeo() {
  return {
    name: 'bunia-seo',
    transformIndexHtml(html, ctx) {
      const site = JSON.parse(fs.readFileSync(resolve(process.cwd(), 'src/config/site.json'), 'utf-8'));
      const seo = JSON.parse(fs.readFileSync(resolve(process.cwd(), 'src/config/seo.json'), 'utf-8'));
      const i18n = JSON.parse(fs.readFileSync(resolve(process.cwd(), 'src/locales/ar.json'), 'utf-8'));
      
      const url = site.url + (ctx.path.includes('404') ? '/404.html' : '/');
      const ogImage = site.url + seo.ogImage;
      const indexable = seo.indexable && !ctx.path.includes('404') ? 'index,follow,max-image-preview:large' : 'noindex,nofollow';
      
      const socials = Object.values(site.socials).filter(s => s && !s.includes('REPLACE_ME'));
      const sameAs = socials.length ? `"sameAs": ${JSON.stringify(socials)}` : `"sameAs": []`;

      const csp = [
        "default-src 'self'",
        "script-src 'self'",
        "style-src 'self' 'unsafe-inline'",
        "img-src 'self' data:",
        "font-src 'self'",
        `connect-src 'self'${site.notifyForm.endpoint ? ' ' + new URL(site.notifyForm.endpoint).origin : ''}${site.analytics.provider === 'plausible' ? ' ' + 'https://plausible.io' : ''}`,
        `form-action 'self'${site.notifyForm.endpoint ? ' ' + new URL(site.notifyForm.endpoint).origin : ''}`,
        "base-uri 'self'",
        "object-src 'none'"
      ].join('; ');

      const headTags = `
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="Content-Security-Policy" content="${csp}" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <meta name="robots" content="${indexable}" />
        <title>${i18n.meta.title}</title>
        <meta name="description" content="${i18n.meta.description}" />
        <link rel="canonical" href="${site.url}/" />
        
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="${site.brand.name}" />
        <meta property="og:title" content="${i18n.meta.ogTitle}" />
        <meta property="og:description" content="${i18n.meta.ogDescription}" />
        <meta property="og:url" content="${site.url}/" />
        <meta property="og:image" content="${ogImage}" />
        <meta property="og:image:width" content="${seo.ogImageWidth}" />
        <meta property="og:image:height" content="${seo.ogImageHeight}" />
        <meta property="og:image:alt" content="${i18n.meta.ogImageAlt}" />
        <meta property="og:locale" content="ar_JO" />
        
        <meta name="twitter:card" content="${seo.twitterCard}" />
        <meta name="twitter:title" content="${i18n.meta.ogTitle}" />
        <meta name="twitter:description" content="${i18n.meta.ogDescription}" />
        <meta name="twitter:image" content="${ogImage}" />
        <meta name="twitter:image:alt" content="${i18n.meta.ogImageAlt}" />
        
        <meta name="theme-color" content="${seo.themeColor}" />
        <meta name="color-scheme" content="dark" />
        
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        <script type="application/ld+json">
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "${site.brand.name}",
            "alternateName": "${site.brand.nameAr}",
            "url": "${site.url}",
            "logo": "${site.url}/icon-512.png",
            "description": "${i18n.meta.description}",
            "foundingDate": "${site.brand.foundingYear}",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "${site.location.cityAr}",
              "addressCountry": "${site.location.countryCode}"
            },
            "areaServed": ${JSON.stringify(seo.organization.areaServed)},
            ${sameAs}
          }
        </script>
        <script type="application/ld+json">
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "${site.brand.name}",
            "url": "${site.url}/",
            "inLanguage": "ar"
          }
        </script>
      `;

      const staticHtml = `
        <div class="bg-indigo text-bone/80 min-h-screen flex flex-col font-arabic" style="direction: rtl;">
          <header class="py-10 px-6 md:px-12 max-w-7xl mx-auto w-full flex justify-between items-center">
            <div class="flex items-center gap-4 text-bone font-bold text-3xl">بونيا</div>
            <span class="text-xs font-medium px-4 py-2 border border-bone/20 text-bone/80 rounded-md">قيد التأسيس</span>
          </header>
          <main class="flex-1 flex flex-col items-center justify-center text-center px-6 max-w-4xl mx-auto py-20">
            <h1 class="text-4xl md:text-6xl text-bone font-bold mb-6" style="font-weight: 900; line-height: 1.2;">الأساس صار. والباب بينفتح قريب.</h1>
            <p class="text-lg md:text-xl mb-10 max-w-2xl" style="line-height: 1.7;">بونيا شركة تطوير رقمي أردنية. بنبني مواقع بتطير من سرعتها، وبنخلّي الدفع والفواتير تمشي لحالها، ومنصات بتكبر مع شغلك.</p>
            <form class="flex flex-col sm:flex-row gap-2 w-full max-w-md">
              <input type="email" placeholder="you@company.com" class="flex-1 bg-ink/40 border border-bone/20 rounded px-4 py-4 text-bone" dir="ltr" />
              <button type="submit" class="bg-bone text-ink font-semibold px-8 py-4 rounded">خبّروني</button>
            </form>
          </main>
          <section class="py-32 px-6 md:px-12 max-w-7xl mx-auto w-full">
            <h2 class="text-3xl text-bone font-bold text-center mb-12">شو بنبني إلك؟</h2>
            <div class="grid md:grid-cols-3 gap-8">
              <div class="border border-bone/10 p-10 rounded bg-ink/40">
                <h3 class="text-xl text-bone font-semibold mb-3">موقع بيسبق الكل</h3>
                <p>موقع نظيف وسريع وبيطلع على جوجل، عشان زبونك يوصلك من غير ما يستنى.</p>
              </div>
              <div class="border border-bone/10 p-10 rounded bg-ink/40">
                <h3 class="text-xl text-bone font-semibold mb-3">الفلوس تمشي لحالها</h3>
                <p>فواتير ودفع إلكتروني ومتابعات أوتوماتيك، تقبض بوقتك وبدون مطاردة.</p>
              </div>
              <div class="border border-bone/10 p-10 rounded bg-ink/40">
                <h3 class="text-xl text-bone font-semibold mb-3">منصة بتكبر معك</h3>
                <p>حجوزات ولوحات تحكم وأنظمة على مقاسك، بتوسع كل ما توسّع شغلك.</p>
              </div>
            </div>
          </section>
          <footer class="py-8 px-6 text-center border-t border-bone/10 mt-12">
            <p class="text-bone font-bold text-xl">بونيا</p>
            <p>عمّان، الأردن</p>
            <p class="mt-4 text-sm">© 2026 بونيا. كل الحقوق محفوظة.</p>
          </footer>
        </div>
      `;

      return html
        .replace('<!--bunia-head-->', headTags)
        .replace('<!--bunia-prerender-->', staticHtml);
    },
    generateBundle() {
      const site = JSON.parse(fs.readFileSync(resolve(process.cwd(), 'src/config/site.json'), 'utf-8'));
      const seo = JSON.parse(fs.readFileSync(resolve(process.cwd(), 'src/config/seo.json'), 'utf-8'));
      
      if (seo.indexable) {
        const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${site.url}/</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
  </url>
</urlset>`;
        this.emitFile({ type: 'asset', fileName: 'sitemap.xml', source: sitemap });
        const robots = `User-agent: *\nAllow: /\nSitemap: ${site.url}/sitemap.xml`;
        this.emitFile({ type: 'asset', fileName: 'robots.txt', source: robots });
      } else {
        this.emitFile({ type: 'asset', fileName: 'robots.txt', source: 'User-agent: *\nDisallow: /' });
      }
    }
  };
}

export default defineConfig({
  base: process.env.VITE_BASE || "/",
  plugins: [vue(), buniaSeo()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        notFound: resolve(__dirname, '404.html')
      }
    }
  }
});