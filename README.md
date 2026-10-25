# Superior Link Nigeria Limited website

Static HTML/CSS/JavaScript. Proposed changes belong only on `feature/sln-website-refresh-2026`. Main, CNAME and hosting configuration are unchanged. Merge and deployment require separate review.

Edit root HTML pages, then run `node scripts/sync-pages.cjs` to regenerate folder aliases. Navigation uses portable `.html` routes. Serve locally over HTTP.

## Inquiry routing and limitations

Buyer, supplier, quote and fleet inquiries use existing Formspree endpoint `mkozdqyg`. Investor interest and document requests use existing endpoint `xojlgkyg`. `form_type` distinguishes inquiries. Forms POST without JavaScript; enhanced forms validate, prevent repeat clicks, show explicit service acceptance, and preserve entries on errors or a 20-second timeout.

No new service, credentials, CRM, payment integration, uploads, KYC automation or protected data room is introduced. Endpoint ownership, activation, domain restrictions, quotas, spam settings, recipients and actual inbox delivery cannot be confirmed from code. The owner must verify Formspree settings and perform a consented end-to-end check before merge. Tests intercept submissions and send no live inquiries. Service acceptance does not establish inbox delivery. Document requests are reviewed manually and grant no automatic access.

## Assets and claims

See [asset register](ASSET-REGISTER.md). Legacy PDF downloads are removed from the proposed site pending content and publication approval. Originals remain in Git history; removal does not revoke previous public access. Attachments from the referenced chat were not available as verified company documents. No updated documents are published. Unverified Dangote approval and counterparty claims are removed from HTML. Independent facilitation implies no refinery affiliation, mandate or allocation.

## Validation

Run `node --test tests/forms.test.cjs` for submission-state tests and `node scripts/check-site.cjs` for route, asset and form checks. Review desktop/mobile layouts before merge. No deployment automation is added.
