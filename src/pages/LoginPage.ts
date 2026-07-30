// src/pages/LoginPage.ts

import {BasePage} from './BasePage';
import {LoginLocators} from '../locators/LoginLocators';
import {Page} from '@playwright/test';

export class LoginPage extends BasePage {

   constructor(page: Page) {
      super(page);
   }

   async login(username: string, password: string) {
      await this.page.fill(LoginLocators.USER_NAME, username);
      await this.page.fill(LoginLocators.PASSWORD, password);
      await this.page.click(LoginLocators.LOGIN_BUTTON);
   }

}