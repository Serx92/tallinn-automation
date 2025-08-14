import { test, expect } from "@playwright/test";
import { faker } from "@faker-js/faker";

const username = faker.internet.username();
const password = faker.internet.password();

test("Negative login test", async ({ page }) => {
  await page.goto(process.env.APP_URL!);
  await page.getByTestId("username-input").fill(username);
  await page.getByTestId("password-input").fill(password);
  await expect(page.getByTestId("signIn-button")).toBeEnabled();
});

test("Authorization error pop-up is displayed", async ({ page }) => {
  await page.goto(process.env.APP_URL!);
  await page.getByTestId("username-input").fill(username);
  await page.getByTestId("password-input").fill(password);
  await page.getByTestId("signIn-button").click();
  await expect(page.getByTestId("authorizationError-popup")).toBeVisible();
});
