Superior Link Nigeria Limited — all-in-one fix package (v18)

This package fixes:
- robots.txt and sitemap.xml
- clean routing via /products, /pms, /investors, /contact, etc.
- split Formspree endpoints
- canonical URLs and descriptions
- thank-you page noindex
- llms.txt for AI crawler discovery

Formspree:
- Quote form: https://formspree.io/f/mkozdqyg
- Data Room form: https://formspree.io/f/xojlgkyg

Deploy:
1. Upload ALL files to your GitHub repo root
2. Commit changes
3. Let Cloudflare Pages redeploy
4. In Cloudflare DNS, point BOTH apex and www directly to superiorlinkng.pages.dev
5. Use only ONE host redirect direction (www -> apex OR apex -> www)
