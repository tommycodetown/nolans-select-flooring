import { expect, test } from "@playwright/test";

const pages = [
  ["services", "/services"],
  ["service-installation", "/services/hardwood-flooring-installation"],
  ["service-custom", "/services/custom-decorative-flooring"],
  ["projects", "/projects"],
  ["project-detail", "/projects/116-central-park-south"],
  ["project-detail-portrait", "/projects/roslyn-heights"],
  ["about", "/about"],
  ["contact", "/contact"],
] as const;

test("capture representative internal pages", async ({ page }, testInfo) => {
  test.setTimeout(120_000);
  for (const [name, route] of pages) {
    const response = await page.goto(route);
    expect(response?.ok()).toBeTruthy();
    await page.evaluate(async () => {
      for (let y = 0; y < document.body.scrollHeight; y += window.innerHeight * 0.8) {
        window.scrollTo(0, y);
        await new Promise((resolve) => setTimeout(resolve, 80));
      }
      await new Promise((resolve) => setTimeout(resolve, 250));
      window.scrollTo(0, 0);
    });
    await page.screenshot({ path: testInfo.outputPath(`${name}.png`), fullPage: true });
  }
});
