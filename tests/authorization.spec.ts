import { test, expect } from '@playwright/test';


test.only('Negative login test', async ({ page }) => {
  await page.goto('https://fe-delivery.tallinn-learning.ee/signin');
  // Fill in the username and password fields
  await page.getByTestId('username-input').fill('username123');
  await page.getByTestId('password-input').fill('username123');
  await expect (page.getByTestId('signIn-button')).toBeEnabled();

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test.only('Authorization error pop-up is displayed', async ({ page }) => {
  await page.goto('https://fe-delivery.tallinn-learning.ee/signin');
  // Fill in the username and password fields
  await page.getByTestId('username-input').fill('username123');
  await page.getByTestId('password-input').fill('username123');
  await page.getByTestId('signIn-button').click()
  await expect (page.getByTestId('authorizationError-popup')).toBeVisible();
});





