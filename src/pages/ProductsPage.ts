// src/pages/ProductsPage.ts

import {Page} from '@playwright/test';
import {BasePage} from './BasePage';
import {LoginLocators} from '../locators/LoginLocators';
import {ProductsLocators} from '../locators/ProductsLocators';


export class ProductsPage extends BasePage {
   constructor(page: Page) {
      super(page);
   }

   async logout() {
      await this.page.click(ProductsLocators.BURGER_MENU_BUTTON);
      await this.page.click(ProductsLocators.LOGOUT_LINK);
   }

   async aboutLink() {
      await this.page.click(ProductsLocators.BURGER_MENU_BUTTON);
      await this.page.click(ProductsLocators.ABOUT_LINK);
   }


}