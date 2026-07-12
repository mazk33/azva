# AZVA Launch QA

## Required assets

Before deployment, confirm these files exist in `public/`:

- `favicon.ico`
- `icon.png` at 512 × 512
- `apple-icon.png` at 180 × 180
- `brand/azva-logo.png`

## Functional

- All navigation routes and homepage anchors work.
- Conversation form handles validation, success, and server errors.
- Perspective article opens from both homepage and Perspectives.
- PRIZM Request Access points to the intended destination.
- No `mailto:` remains as the primary inquiry mechanism.

## SEO

Open and verify:

- `/robots.txt`
- `/sitemap.xml`
- `/manifest.webmanifest`
- `/opengraph-image`
- `/prizm/opengraph-image`
- `/perspectives/opengraph-image`

Inspect page source for:

- canonical URL
- title and description
- Open Graph metadata
- Twitter card metadata
- Organization JSON-LD
- Article JSON-LD on the operating note

## Accessibility

- Tab through the site without a mouse.
- Confirm the skip link appears on first Tab.
- Confirm menu opens, closes, and returns focus logically.
- Confirm focus rings are visible.
- Confirm form labels and error messages are announced.
- Enable reduced motion and verify no content disappears.
- Test at 200% browser zoom.

## Responsive

Check at:

- 1440 × 900
- 1366 × 768
- 1024 × 768
- 768 × 1024
- 430 × 932
- 390 × 844

## Performance

- Run `npm run build`.
- Run Lighthouse in an incognito production build.
- Confirm the founder image is appropriately sized and optimized.
- Confirm no layout shift occurs when fonts and images load.
- Confirm page-specific OG routes render without errors.

## External validation

After production deployment:

- Google Rich Results Test
- LinkedIn Post Inspector
- Facebook Sharing Debugger
- X Card Validator or live draft preview
