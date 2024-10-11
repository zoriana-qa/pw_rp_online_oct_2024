import { test, expect } from '@playwright/test';

test('logged in user can place order for item', async ({ page }) => {
  await page.goto('https://shopdemo-alex-hot.koyeb.app/login');
  await page.getByRole('main').getByPlaceholder('Please Enter Your Email').fill('xotabu4@gmail.com');
  await page.getByPlaceholder('Please Enter Your Password').fill('xotabu4@gmail.com');
  await page.getByPlaceholder('Please Enter Your Password').press('Enter');
  await expect(page.getByRole("heading", { name: "Login" })).not.toBeVisible();

  await page.getByRole('link', { name: 'Brands ' }).click();
  await page.getByRole('menuitem', { name: 'Nizhyn cannery' }).click();
  await page.getByRole('link', { name: 'CHERRY TOMATOES By Nizhyn' }).click();
  await page.getByRole('button', { name: 'Add To Bag' }).click();
  await page.getByRole('button', { name: 'Place Order' }).click();
  // Strict mode violation: await expect(page.locator('h2')).toContainText('Thank you for your order.');
  await expect(page.getByRole("heading", { name: "Thank you for your order." })).toBeVisible();
});