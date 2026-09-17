import { test, expect } from "@playwright/test";

test("homepage renders", async ({ page }, testInfo) => {
  const response = await page.goto("/");
  expect(response?.ok()).toBeTruthy();

  await expect(page.locator("main")).toBeVisible();
  await expect(page.locator("header")).toBeVisible();
  await expect(page.locator("footer")).toBeVisible();

  // Exercise lazy-loaded imagery and scroll-triggered presentation before capture.
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += window.innerHeight * 0.8) {
      window.scrollTo(0, y);
      await new Promise((resolve) => setTimeout(resolve, 60));
    }
    window.scrollTo(0, 0);
  });

  await page.screenshot({
    path: testInfo.outputPath("homepage-full.png"),
    fullPage: true,
  });
  await testInfo.attach("homepage-full", {
    path: testInfo.outputPath("homepage-full.png"),
    contentType: "image/png",
  });
});
