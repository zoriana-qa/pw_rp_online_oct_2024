import { test, expect } from "@playwright/test";

test("user can sign up", async ({ page }) => {
  const email = Date.now() + "@test.com";
  await page.goto("https://shopdemo-alex-hot.koyeb.app/register");
  await page
    .getByRole("main")
    .getByPlaceholder("Please Enter Your Email")
    .fill(email);
  await page.getByPlaceholder("Please Enter Your First Name").fill("Test");
  await page.getByPlaceholder("Please Enter Your Last Name").fill("Test");
  await page
    .getByPlaceholder("Please Enter Your Password")
    .fill(email);
  await page.getByRole("button", { name: "Sign Up" }).click();
  await expect(
    page.getByRole("heading", { name: "Account Details" })
  ).toBeVisible();
});
