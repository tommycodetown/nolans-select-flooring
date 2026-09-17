import { expect, test } from "@playwright/test";

const routes = [
  "/",
  "/services",
  "/services/hardwood-flooring-installation",
  "/services/floor-sanding-refinishing",
  "/services/floor-repair",
  "/services/lvt-vinyl-flooring",
  "/services/hardwood-stairs",
  "/services/custom-decorative-flooring",
  "/projects",
  "/projects/116-central-park-south",
  "/projects/wooster-st",
  "/projects/metropolitian-pavilion",
  "/projects/roslyn-heights",
  "/about",
  "/contact",
  "/privacy",
];

for (const route of routes) {
  test(`${route} renders without layout overflow`, async ({ page }) => {
    const response = await page.goto(route);
    expect(response?.ok()).toBeTruthy();
    await expect(page.locator("header")).toBeVisible();
    await expect(page.locator("main h1")).toBeVisible();
    await expect(page.locator("footer")).toBeVisible();
    await expect(page.locator('header .header-nav a[href="/services"]')).toBeAttached();
    await expect(page.locator('header .header-nav a[href="/projects"]')).toBeAttached();
    await expect(page.locator('header .header-nav a[href="/about"]')).toBeAttached();
    await expect(page.locator('header .header-nav a[href="/contact"]')).toBeAttached();
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth + 1)).toBeTruthy();
  });
}

test("contact actions use direct phone and email links", async ({ page }) => {
  await page.goto("/contact");
  await expect(page.locator('main a[href="tel:+12128792436"]')).toBeVisible();
  await expect(page.locator('main a[href="mailto:John@NolanTFloors.com"]')).toBeVisible();
});

const narrowOverflowRoutes = ["/", "/projects"] as const;
const narrowOverflowWidths = [320, 360] as const;

for (const route of narrowOverflowRoutes) {
  for (const width of narrowOverflowWidths) {
    test(`${route} has no horizontal overflow at ${width}px`, async ({ page }) => {
      await page.setViewportSize({ width, height: 800 });
      const response = await page.goto(route);
      expect(response?.ok()).toBeTruthy();
      expect(
        await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth + 1),
      ).toBeTruthy();
    });
  }
}

const retiredProjectRoutes = [
  "/projects/22-east-67th-street",
  "/projects/wooster-street",
  "/projects/metropolitan-pavilion",
] as const;

for (const route of retiredProjectRoutes) {
  test(`${route} returns 404`, async ({ page }) => {
    const response = await page.goto(route);
    expect(response?.status()).toBe(404);
  });
}

test("project listing images stay inside their project folders", async ({ page }) => {
  await page.goto("/projects");

  const sources = await page.locator(".project-list img").evaluateAll((images) =>
    images.map((image) => {
      const src = image.getAttribute("src") ?? "";
      try {
        const url = new URL(src, window.location.origin);
        return url.searchParams.get("url") ?? src;
      } catch {
        return src;
      }
    }).filter(Boolean),
  );

  expect(sources.length).toBeGreaterThan(0);
  expect(sources.every((src) => src.startsWith("/images/projects/"))).toBeTruthy();
  expect(sources.some((src) => src.includes("/images/nolans floors photos/"))).toBeFalsy();
});

test("homepage recent projects link to live project slugs", async ({ page }) => {
  await page.goto("/");

  const hrefs = await page.locator("#projects .project-list a[href^='/projects/']").evaluateAll((links) =>
    [...new Set(links.map((link) => link.getAttribute("href") ?? "").filter(Boolean))],
  );

  expect(hrefs).toEqual([
    "/projects/116-central-park-south",
    "/projects/twix-hills-rd",
    "/projects/225-west",
  ]);
});

test("header Discuss a Project CTA uses contact anchor on homepage and /contact elsewhere", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("header .header-cta")).toHaveAttribute("href", "#contact");

  await page.goto("/about");
  await expect(page.locator("header .header-cta")).toHaveAttribute("href", "/contact");
});

test("mobile menu closes on Escape and returns focus to menu toggle", async ({ page }) => {
  await page.setViewportSize({ width: 360, height: 800 });
  await page.goto("/about", { waitUntil: "networkidle" });

  const menuButton = page.locator(".menu-button");
  await expect(menuButton).toBeVisible();
  await menuButton.click();
  await expect(menuButton).toHaveAttribute("aria-expanded", "true");

  await page.keyboard.press("Escape");
  await expect(menuButton).toHaveAttribute("aria-expanded", "false");
  await expect(menuButton).toBeFocused();
});
