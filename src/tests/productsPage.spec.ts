// src/tests/productsPage.spec.ts

import {test, expect} from '@playwright/test';
import {LoginPage} from '../pages/LoginPage';
import {BASE_URL, USER_NAME_INPUT, PASSWORD_INPUT, INVENTORY_URL} from '../utils/envConfig'
import {ProductsPage} from '../pages/ProductsPage';
import {ProductsLocators} from '../locators/ProductsLocators';

test.describe("Product Page Validation", () => {
   let loginPage: LoginPage;
   let productsPage: ProductsPage;

   test.beforeEach(async ({page}) => {
      loginPage = new LoginPage(page);
      productsPage = new ProductsPage(page);

      await page.goto(BASE_URL);
      await loginPage.login(USER_NAME_INPUT, PASSWORD_INPUT);
      await expect(page).toHaveURL(INVENTORY_URL);
   });

   test("Validate Logout Functionality", async ({page}) => {
      await productsPage.logout();
      await expect(page).toHaveURL(BASE_URL);
   })

   test("Validate About Page and Navigate Back", async ({page}) => {
      await productsPage.aboutLink();
      await expect(page.locator(ProductsLocators.TEXT_FROM_BUSINESS)).toBeVisible();
      await page.goBack();
      await expect(page.locator(ProductsLocators.BURGER_MENU_BUTTON)).toBeVisible();
   })


})