// src/tests/login.spec.ts

import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { BASE_URL, USER_NAME_INPUT, PASSWORD_INPUT, INVENTORY_URL } from '../utils/envConfig';
import { ProductsLocators } from '../locators/ProductsLocators'

test('Login to SauceDemo application with valid credentials', async ({ page }) => {

   const loginpage = new LoginPage(page);
   await page.goto(BASE_URL);

   await loginpage.login(USER_NAME_INPUT, PASSWORD_INPUT);

   await expect(page).toHaveURL(INVENTORY_URL);
});