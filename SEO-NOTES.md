# SEO changes and owner follow-up

Adds descriptive titles, unique descriptions, Organization/WebSite/WebPage/BreadcrumbList JSON-LD, visible breadcrumbs, product buying information, contextual links and social metadata using the existing logo. No invented ratings, prices, certifications, refinery affiliations or social profiles. Existing canonical URLs and routes are preserved. The sitemap contains 15 selected canonical pages; thank-you remains noindex.

Company schema omits phone, address and hours pending confirmation: the supplied Google profile screenshot has a different phone number from the website. Existing website contacts are unchanged. No private screenshots or submission data are published.

Search Console: submit only /sitemap.xml under Sitemaps; use URL Inspection for individual pages. Inspect actual missing-URL examples before adding redirects. Known removed documents should not redirect to unrelated pages. Google may choose its own canonical and search snippet. No ranking or rich-result guarantee.

Historical screenshot baseline: 17 clicks, 374 impressions, 4.5% CTR and average position 13 over three months. Compare query/page performance after recrawl; these figures are not a live audit. Google Business Profile edits, account integrations, live inquiries and analytics are outside this PR.

References:
- https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- https://developers.google.com/search/docs/appearance/structured-data/organization
- https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls

Validation: node scripts/check-site.cjs; node scripts/check-seo.cjs; node --test tests/forms.test.cjs.

A dedicated fuel haulage inquiry page is added and included in the sitemap (15 selected canonical pages).

Local browser preview could not be reached from the available browser session (connection timeout). Static checks and submission tests passed; rendered desktop/mobile review and Google Rich Results/URL Inspection checks remain to be completed before merge.
