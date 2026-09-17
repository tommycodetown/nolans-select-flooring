# Disposable HTML Preview Rules

## Purpose

HTML previews are temporary review files used to show the client visual changes such as:

* Page layout
* Section order
* Button styling
* Fonts and font sizes
* Colours
* Spacing
* Photos and image placement
* Written content
* Mobile and desktop responsiveness

They are not the production website and must never become a second codebase.

## Source of truth

* The Next.js application is always the source of truth.
* Make all real design and content changes in the Next.js app first.
* Generate the HTML preview from the current app state.
* Never make design decisions only inside the preview file.
* Never import preview code back into the app.

## File location

* Save all previews inside:

  /previews/

* Never place previews inside:

  * /src/
  * /app/
  * /pages/
  * /public/
  * /components/

* The /previews/ folder must remain ignored by Git using:

  /previews/

## Application safety

When generating or updating a preview:

* Modify only the requested file inside /previews/.
* Do not modify any Next.js application file.
* Do not modify package.json, lock files, configuration files, app routes, components, stylesheets or assets.
* Do not import, reference or connect the preview to the application.
* Do not start or add a server.
* Do not add dependencies.
* Do not change the build configuration.

## Standalone requirements

Every preview must:

* Be a single valid .html file.
* Open directly in Safari or Chrome.
* Require no localhost, npm, Next.js, server or hosting.
* Include all CSS inside the file.
* Include all JavaScript inside the file.
* Include inline SVG icons where needed.
* Use internal anchor links only unless explicitly instructed otherwise.
* Work on desktop and mobile.
* Include the correct viewport meta tag.
* Avoid broken local paths.

## Font requirements

Fonts must display identically on mobile and desktop.

* Do not use Google Fonts @import.
* Do not depend on fonts.googleapis.com or fonts.gstatic.com.
* Do not depend on local machine font paths.
* Embed the required webfont files directly inside the HTML using Base64 data URLs and @font-face.
* Embed only the font families and weights actually used.
* Use explicit font-family names.
* Use only weights that genuinely exist for that font.
* Do not rely on synthetic bold or synthetic italic.
* Include sensible fallback fonts, but the embedded fonts must be the primary fonts.
* The preview must render correctly without internet access.

## Image requirements

Images must remain visible when the file is sent to another person.

* Do not use local filesystem image paths.
* Do not reference /public/ or application asset paths.
* Embed required images directly as Base64 data URLs when practical.
* For temporary layout previews, use clearly labelled visual placeholders where embedding real images would make the file unnecessarily large.
* Preserve the intended image dimensions, crop and responsive behaviour.
* Do not use external image URLs unless explicitly approved.

## Responsive requirements

* Match the current app's desktop and mobile layouts as closely as possible.
* Preserve section order and hierarchy.
* Test common mobile widths.
* Ensure there is no horizontal overflow.
* Ensure navigation, buttons, text and images remain usable.
* Responsive rules may change font size, spacing, stacking and alignment, but must not accidentally change font families.

## Interaction requirements

The preview may include lightweight interactions such as:

* Mobile menu toggle
* FAQ accordion
* Internal anchor scrolling
* Tabs or simple concept switching

Do not attempt to reproduce:

* Real form submissions
* Stripe payments
* Analytics
* Authentication
* Server actions
* Database behaviour
* External APIs

Represent unavailable functionality visually only.

## Verification checklist

After generating a preview:

1. Confirm only the requested file inside /previews/ was modified.
2. Run git status.
3. Confirm the preview file is ignored by Git.
4. Confirm no application files were changed.
5. Confirm there are no Google Fonts imports.
6. Confirm there are no external font URLs.
7. Confirm there are no local image paths.
8. Confirm there are no references to app files.
9. Confirm all required fonts and weights are embedded.
10. Confirm the HTML opens without internet access.
11. Confirm the layout works at desktop and mobile widths.
12. Confirm there is no horizontal scrolling.
13. Confirm basic interactions work.
14. Report any limitations clearly.

## Required completion report

After every preview task, provide:

* Preview file path
* App files changed: yes or no
* Git ignored: yes or no
* External font dependencies: yes or no
* External image dependencies: yes or no
* Offline capable: yes or no
* Desktop checked: yes or no
* Mobile checked: yes or no
* Known limitations

## Reusable Cursor prompt

Copy and paste this whenever creating or updating a preview:

```text
Read and follow PREVIEW_GENERATION_RULES.md before doing anything.

Create or update:
previews/[filename].html

Use the current Next.js app as the source of truth.

Do not modify application files.
```
