// src/pages/BasePage.ts

import { Locator, Page } from '@playwright/test';

export class BasePage {
   constructor(protected page: Page) {}

   async fill(locator: string, value: string): Promise<void> {
      await this.page.fill(locator, value);
   }

   async click(locator: string): Promise<void> {
      await this.page.click(locator);
   }

   async isVisible(locator: string): Promise<void> {
      await this.page.locator(locator).waitFor({ state: 'visible' });
   }
}