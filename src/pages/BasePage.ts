// src/pages/BasePage.ts

import {Locator, Page} from '@playwright/test';

export class BasePage {
   constructor(protected page: Page) {
   };

   async fill(locator: string, value: string) {
      await this.page.fill(locator, value);
   }

   async click(locator: string) {
      await this.page.click(locator);
   }

   async isVisible(locator: string) {
      return await this.page.locator(locator).isVisible();
   }

   async waitForVisible(locator: string) {
      await this.page.locator(locator).waitFor({state: 'visible'});
   }

   async clear(locator: string) {
      await this.page.locator(locator).clear();
   }


}
