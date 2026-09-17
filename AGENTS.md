<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Website Build Instructions

## Existing Architecture

Before making implementation changes:

- Inspect the existing project structure, components, styles, configuration, dependencies, and working functionality.
- Preserve the current technology stack and architecture unless there is a strong technical reason to change something.
- Reuse existing components, utilities, patterns, and infrastructure where appropriate.
- Do not rebuild working functionality unnecessarily.
- Do not replace stable reusable infrastructure with simpler one-off implementations unless there is a clear benefit.
- Do not introduce dependencies unless genuinely needed.
- Prefer simple, maintainable solutions over unnecessary abstraction.

## Design Objective

- Build a polished, professional service-business website that feels deliberately designed for the specific business.
- The goal is not merely to produce a technically complete website. The finished site should feel visually resolved, coherent, distinctive to the business, and close to client-ready before human refinement.
- The design should have enough originality to feel bespoke.
- Do not solve originality by adding unnecessary visual effects.
- Do not treat design as a collection of independent sections. Design the website as one continuous visual system.
- The visitor should be able to understand the page effortlessly. Hierarchy, navigation, services, imagery, and calls to action should be immediately clear without requiring concentration.
- The visitor should rarely need to stop and visually work out how the page is organized.

## Visual Design Process

- Do not make all major visual decisions once and assume they are correct.

Before committing to the full visual direction:

- Understand the business, audience, positioning, supplied assets, and design direction.
- Briefly consider 2–3 plausible visual and compositional directions appropriate to this specific business.
- Compare those directions conceptually and choose the strongest based on the brief, audience, positioning, content, and available assets.
- Do not build multiple full versions. The purpose of this exploration is to avoid automatically committing to the first generic solution.

Before styling individual components extensively, establish the page-level composition.

Decide:

- what should visually dominate
- what should recede
- where imagery should carry the experience
- where information density should increase or decrease
- where the strongest focal points should occur
- how the visitor's eye should move down the page
- how sections should transition visually

- Design from the page level downward, not only component by component.

Then:

1. Establish an appropriate visual system.
2. Implement the website.
3. Render and inspect the actual website at realistic desktop and mobile widths.
4. Critique the result as a designer, not only as a developer.
5. Identify weak areas in hierarchy, spacing, composition, colour, typography, imagery, density, pacing, and page flow.
6. Revise those areas.
7. Render and inspect the revised result again.
8. Repeat when meaningful design problems remain.

- Only declare the website complete after the rendered result has been visually reviewed.
- Where browser or visual inspection tooling is available, use it.
- When Playwright or equivalent browser tooling exists in the project, use it to inspect the rendered website rather than relying only on source-code inspection.
- The first rendered implementation should not automatically be treated as finished.

## Visual Flow and Pacing

- Create a clear visual rhythm from one section to the next.
- Sections should feel naturally connected rather than like independent blocks stacked together.
- Vary composition where appropriate while maintaining overall consistency.
- Use contrast, spacing, imagery, typography, scale, alignment, and background treatment intentionally to create pacing.
- Avoid excessive empty space or sections that feel unfinished or bare.
- Avoid unnecessary vertical scrolling.
- Normal homepage sections should generally fit comfortably within or near one viewport where practical.
- Longer sections are acceptable when the content genuinely requires them.
- Present repeated information efficiently rather than forcing users through oversized layouts.
- Page length should be intentional, especially on mobile.
- Do not make every section the same height, layout, or visual weight.
- Do not create abrupt transitions that make adjacent sections feel unrelated.
- When designing or changing a section, evaluate it in relation to the sections immediately before and after it.
- A section is not successful merely because it looks good in isolation.

Check whether:

- the transition into it feels natural
- its visual weight makes sense at that point in the page
- its alignment relates intentionally to surrounding content
- it introduces useful contrast without breaking overall coherence
- the following section continues the visual rhythm naturally

- The site should feel like one designed experience rather than a sequence of templates.

## Composition and Alignment

- Every element should look intentionally positioned.
- Use deliberate alignment, spacing, grids, and content widths.
- Images, headings, text, supporting content, and CTAs should feel visually connected.
- Avoid layouts where images appear casually dropped into unused space.
- Consider balance, negative space, visual weight, and focal points.
- Check composition at common desktop and mobile widths.
- Avoid accidental-looking offsets, inconsistent margins, or arbitrary alignment.
- Reconsider the composition if a section technically fits but still feels empty, unbalanced, or awkward.
- Do not automatically center content simply because it is the easiest layout.
- Use asymmetry where appropriate when it improves visual interest or hierarchy.
- Ensure unusual alignment or overlap feels deliberate rather than accidental.

## Colour System

- Establish a coherent project-specific colour palette before using colours throughout the site.

The palette should normally define:

- primary brand colour
- secondary colour
- accent colour
- page background
- alternate surface/background colour
- primary text colour
- muted text colour
- border/divider colour
- CTA states where needed

Rules:

- Colours must complement one another.
- The palette should reflect the business positioning and design direction in `client-brief.md`.
- Do not choose colours section-by-section in isolation.
- Do not introduce unrelated colours simply to create variety.
- Use accent colours deliberately and sparingly.
- Background transitions should feel intentional.
- Maintain sufficient text and control contrast.
- Avoid a palette that feels muddy, disjointed, overly busy, or visually arbitrary.
- Do not force the template's existing colours if a different palette better suits the client.
- Do not reuse the same distinctive palette across unrelated client websites merely because it already exists in the starter.
- During visual review, judge the palette on the rendered website.
- If the individual colours are technically valid but do not visibly work together as a system, revise them.

## Typography

Establish a clear and consistent hierarchy for:

- page titles
- section headings
- supporting headings
- body copy
- labels
- navigation
- CTAs

- Typography should make the page effortless to scan.
- Do not treat typography as decoration applied after layout. Typography is part of the composition.

Consider:

- typeface choice
- scale
- weight
- line length
- line breaks
- text-block width
- spacing between text levels
- contrast between display and supporting text
- how headings align with imagery and neighboring elements
- how typography affects section density and page rhythm

Rules:

- Heading size, weight, spacing, line length, and typeface should clearly communicate importance.
- Avoid generic or arbitrary section names.
- Do not rely solely on progressively larger font sizes to create hierarchy.
- Avoid oversized headings that create unnecessary page length.
- Typography should support the character of the specific business.
- Do not automatically reuse the same font pairing across every client website if another direction is more appropriate.

## Page-Specific Design

- Do not simply duplicate the same structures across different pages.
- The homepage, service index, individual service pages, projects/gallery, about, and contact pages have different jobs and should reflect those differences.
- Reusing components is encouraged where technically sensible, but the resulting pages should not feel copied and pasted.

In particular:

- The homepage should summarize and guide.
- The Services page should provide a useful overview and clear routes into specific services.
- Individual service pages should contain genuinely service-specific information and composition.
- Projects/gallery pages should prioritize imagery and browsing efficiency.
- About pages should communicate credibility and business character.
- Contact pages should minimize friction and make the next action obvious.

- Do not create multiple pages that use essentially the same visual structure with only the heading and copy changed.

## Creative Freedom

- Do not default to the safest generic layout simply because it is easy to implement.

Within the constraints of the brief:

- Make thoughtful composition decisions.
- Use supplied imagery creatively where appropriate.
- Introduce visual variation when it strengthens the page.
- Allow sections to have different structures when that improves flow.
- Look for opportunities to create a distinctive but restrained design appropriate to the business.

Do not automatically default to:

- card grids
- repeated two-column image/text sections
- identical centered heading + paragraph + CTA sections
- predictable alternating left/right layouts
- the same composition patterns used on previous builds

Use the full design vocabulary available where appropriate:

- whitespace
- typography
- scale
- grids
- asymmetry
- contrast
- overlap
- imagery
- cropping
- density
- negative space
- alignment
- section structure

Creative choices should improve at least one of:

- clarity
- credibility
- memorability
- visual flow
- hierarchy
- presentation of the business or its work

- Do not add novelty for its own sake.
- If a creative element does not improve the experience, remove it.

## Design References

- When design references are supplied, do not simply copy their surface appearance.

Infer the underlying design principles that make the reference successful, such as:

- hierarchy
- composition
- rhythm
- density
- spacing
- typography scale
- image treatment
- colour relationships
- navigation treatment
- section transitions

- Use those principles where appropriate while still creating a design specific to the current business.

## Avoid AI-Generated Feel

The website must not look, read, or feel obviously AI-generated.

### Design

Avoid:

- generic service-business layouts with little business-specific character
- excessive cards
- excessive gradients
- repeated rounded containers
- decorative blobs or effects without purpose
- repetitive section structures
- unnecessary animation
- randomly placed imagery
- visual elements added simply to fill space
- layouts that appear assembled from unrelated components
- identical design patterns reused across every page
- obvious repetition of patterns from previous client websites

- Interactive elements should support the website and fit naturally into the page flow.
- They should not become the focal point unless the project specifically requires it.

### Copy

- Write naturally and specifically for the business.

Avoid:

- formulaic sentence structures
- repetitive sentence rhythms
- generic marketing vocabulary
- unnecessary adjectives
- artificial transitions
- repetitive three-part lists
- predictable "Whether you're X, Y, or Z" structures
- unnecessary rhetorical questions
- generic headings that could belong to almost any business
- excessive em dashes
- decorative symbols or characters commonly associated with AI-generated copy
- phrases such as "elevate", "transform", "seamless", "tailored", "exceptional", or "premium" unless they genuinely fit the context

- Copy should feel written by a competent human copywriter.
- Vary sentence length, structure, vocabulary, and paragraph rhythm naturally.
- Avoid copy that is technically correct but flat, lifeless, redundant, or disconnected from the business.
- Copy should have enough character, specificity, and natural rhythm to avoid feeling dead while remaining appropriate to the business.
- When writing from the business's perspective, use natural first-person language such as "we" and "our" unless there is a clear reason not to.
- Do not refer awkwardly to "the company" when the website itself is speaking as the business.
- Every supporting section, heading, paragraph, statistic, caption, and list should have a clear purpose.
- Supporting copy must add new information.
- Do not create copy merely to restate information already obvious from nearby content.
- Do not create filler content simply to occupy space.

## Content Accuracy

- Treat `client-brief.md` as the primary source of truth for business-specific information.

Do not invent:

- business facts
- testimonials
- statistics
- credentials
- awards
- guarantees
- locations
- years of experience
- customer numbers
- certifications
- project results
- pricing
- timelines
- unsupported claims

- If information is unavailable, omit it or use an obvious placeholder where appropriate rather than fabricating content.
- Ensure confirmed services are represented consistently across the website.
- Do not accidentally omit an important service on one page while presenting it prominently elsewhere unless there is a deliberate content strategy behind that decision.

## Conversion

- Understand the intended customer, website objective, and primary CTA from `client-brief.md`.
- Make the primary CTA clear and easy to find.
- Visitors should quickly understand what the business does.
- Important services and differentiators should be easy to understand.
- Pages should guide visitors naturally toward the intended conversion.
- Avoid unnecessary friction or distraction.
- Primary CTAs should behave consistently across the website.
- Preserve existing reusable CTA or enquiry infrastructure unless there is a clear technical reason to replace it.
- If the brief specifies a global enquiry or quote experience, relevant CTAs should trigger that experience consistently from every appropriate page.
- Do not create fake urgency, scarcity, social proof, or misleading conversion tactics.

## Images and Assets

- Inspect all supplied assets before designing the site.
- Do not decide the complete image layout before understanding the actual assets available.
- Inspect the imagery as a collection and let its characteristics influence the design.

Consider:

- orientation
- resolution
- aspect ratio
- subject placement
- visual tone
- available negative space
- focal points
- whether an image works best alone, paired, grouped, as a supporting element, or as a background

Rules:

- Use appropriate supplied logos, photographs, and brand assets.
- Do not ignore suitable supplied imagery.
- Preserve image quality.
- Avoid unnecessary upscaling or rendering images at sizes that make them visibly blurry.
- Choose appropriate aspect ratios and crops.
- Do not force every image into the same predetermined component or aspect ratio.
- Check that important focal points are not accidentally cut off.
- Logos should normally preserve their full artwork rather than being forced into crop-based image behavior.
- Check logos at desktop and mobile sizes for clipping or distortion.
- Image alignment and composition should look deliberate.
- Gallery/project layouts should feel cohesive rather than inconsistent.
- Use image dimensions and layout patterns appropriate to the source asset quality.
- Do not invent visual business assets if suitable real assets are supplied.
- If the brief restricts image sourcing, follow that restriction exactly.

## Mobile Experience

- Mobile should not simply be the desktop site stacked vertically.
- Reconsider composition for smaller screens.
- Reduce unnecessary page length.
- Avoid excessive scrolling caused by oversized spacing, giant headings, or repeated content.
- Keep important information easy to scan.
- Maintain visual hierarchy without making the design cramped.
- Consider horizontal scrollers, condensed grids, tabs, accordions, or other patterns only when they genuinely improve mobile usability.
- Reconsider image composition and cropping for mobile rather than blindly inheriting desktop behavior.
- Check important pages at realistic mobile widths during the visual review process.

## Navigation and Page Behaviour

- Navigation must work across screen sizes.
- New pages should load at the expected top position unless intentional anchor behavior is specified.
- Sticky headers must not obscure headings, anchors, or page content.
- Internal links and CTAs should route or trigger correctly.
- External links should be clearly identifiable when relevant.
- Mobile menus should open, close, and navigate reliably.

## SEO

Implement sensible foundational SEO where appropriate:

- descriptive page titles
- useful meta descriptions
- logical heading hierarchy
- descriptive URLs
- relevant internal links
- meaningful image alt text
- indexable page structure
- appropriate service-page structure
- appropriate structured data where justified

- Do not keyword-stuff or distort copy purely for SEO.

## Accessibility and UX

- Use semantic HTML where appropriate.

Ensure:

- controls are keyboard accessible
- forms have appropriate labels
- links and buttons are identifiable
- text has reasonable contrast
- focus states are usable
- imagery has appropriate alternative text
- layouts remain usable at common widths
- there are no obvious usability barriers

## Functionality

- All implemented functionality must genuinely work.

Check:

- navigation
- buttons
- links
- CTAs
- forms
- interactive elements
- external links
- route transitions

- Do not create fake forms, integrations, booking systems, or functionality that appears operational when it is not.
- Never expose secrets, credentials, API keys, or private configuration in client-side code.

## Technical Quality

- Keep the implementation understandable and maintainable.

Avoid:

- unnecessary duplication
- excessive abstraction
- unnecessary dependencies
- dead code
- brittle hard-coded hacks
- replacing stable infrastructure without justification
- obvious security vulnerabilities

- Follow the project's existing conventions unless there is a clear reason not to.
- Do not sacrifice maintainability merely to achieve a visual effect that can be implemented cleanly.

## Validation Before Completion

Before declaring the website complete:

1. Review the implementation against `client-brief.md`.
2. Confirm all important services and supplied content are represented correctly.
3. Confirm supplied assets were actually used where appropriate.
4. Run the site locally.
5. Use the available browser / Playwright tooling to visually inspect the homepage and every major page at realistic desktop and mobile widths.
6. Do not rely only on reading source code or assuming technically correct CSS produces a strong design.
7. Critique overall flow, hierarchy, section pacing, composition, information density, typography, colour harmony, and image treatment.

For each major page, explicitly assess:

- What is the visual focal point?
- Does the eye know where to go next?
- Does anything feel accidentally placed?
- Does any section feel generic or templated?
- Is there enough visual variation without losing coherence?
- Does the page feel like one designed composition?
- Does the design reflect this specific business?
- Would an experienced designer likely change anything obvious before presenting it?

8. Identify sections that feel bare, awkward, repetitive, generic, visually disconnected, or unnecessarily long.
9. Revise meaningful visual weaknesses.
10. Inspect the revised result again.
11. Repeat the visual review when meaningful weaknesses remain.
12. Check supplied images for blur, distortion, poor cropping, or inappropriate scaling.
13. Check the logo at desktop and mobile sizes.
14. Check desktop and mobile page lengths for unnecessary scrolling.
15. Confirm pages do not look like simple duplicates of one another.
16. Confirm the colour palette works coherently across the rendered website.
17. Test every important CTA.
18. Test navigation and route transitions.
19. Check sticky-header behavior.
20. Test forms and important interactions.
21. Run the production build.
22. Run lint and tests if those scripts exist.
23. Fix errors introduced by the implementation.
24. Check for fabricated or unsupported business claims.
25. Leave the project in a working state.

A passing build is not sufficient by itself.

Completion requires both technical validation and deliberate visual review and refinement.

## Git

- This project should already be a local Git repository before implementation begins.

Do not:

- create or configure a remote repository
- change an existing remote
- push code
- create a GitHub repository

unless explicitly instructed to do so.
