# Webwala Studio

A responsive agency website for Webwala Studio, with three business-site demos and a local browser workspace.

## Main website
- `index.html` — agency homepage, services, starting-price packages, portfolio and WhatsApp enquiry
- `styles.css` — responsive styling
- `script.js` — mobile navigation and WhatsApp enquiry action
- `assets/logo.svg` — vector logo

## Portfolio demos
- `hotel-demo.html` — North House hotel concept with room cards, booking enquiry, gallery, amenities and FAQ
- `cafe-demo.html` — Good Day Cafe concept with menu filters, event section and table enquiry
- `shop-demo.html` — Field & Form shop concept with product search, category filters, cart and WhatsApp order enquiry

All three demo businesses, products, prices, reviews, menus, room details and images are illustrative placeholders. They are not completed client projects. Replace them with a real client's approved content before delivering a production site.

## Studio workspace
- `studio-workspace.html` — browser-local lead tracker, project tracker, quote builder, client intake form, package list and client-progress preview.

**Workspace limitation:** this is a local browser-only MVP. Its records are stored in the browser's localStorage on the current device/profile. It has no server-side login, secure client accounts, shared database, backups, multi-device sync or real private client portal. Anyone with access to the same browser profile can access the saved records. Do not store passwords, payment information, identity documents or other sensitive data there. A production admin/client portal needs server-side authentication, authorization and a database/API (for example, a properly configured Neon/Postgres backend).

## Suggested starting prices
- Launch website — ₹2,999
- Business website — ₹6,999
- Shop catalogue — ₹12,999

These are suggested starting prices, not binding fixed-price commitments. Domain, hosting, payment gateway, advanced booking, inventory sync, paid tools, maintenance and other integrations require separate scope and costing. Confirm scope, revisions, timeline, ownership and payment milestones in writing before starting work.

## Contact
The website's WhatsApp contact is set to **+91 95619 54073**. Update the `wa.me` links in the homepage, scripts and demo pages if this number changes.

## Publish with GitHub Pages
1. Open **Settings → Pages**.
2. Under Build and deployment, choose **Deploy from a branch**, select `main` and `/ (root)`, then Save.
3. GitHub will show the published website URL in the Pages section.

The enquiry forms open WhatsApp with a prepared message. They do not store enquiries on a server.
