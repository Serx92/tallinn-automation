import { test, expect } from '@playwright/test';


test('Negative login test', async ({ page }) => {
  await page.goto('https://fe-delivery.tallinn-learning.ee/');
  await page.getByTestId('username-input').fill('username123');
  await page.getByTestId('password-input').fill('password123');
  await expect (page.getByTestId('signIn-button')).toBeEnabled();

});

test('Authorization error pop-up is displayed', async ({ page }) => {
  await page.goto('https://fe-delivery.tallinn-learning.ee/');
  await page.getByTestId('username-input').fill('username123');
  await page.getByTestId('password-input').fill('password123');
  await page.getByTestId('signIn-button').click()
  await expect (page.getByTestId('authorizationError-popup')).toBeVisible();
});





