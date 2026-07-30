import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
   testDir: './src/tests',

   fullyParallel: true,

   forbidOnly: !!process.env.CI,

   retries: process.env.CI ? 2 : 0,

   workers: process.env.CI ? 1 : undefined,

   reporter: 'html',

   use: {
      trace: 'on-first-retry',

      headless: !!process.env.CI,

      launchOptions: {
         slowMo: process.env.CI ? 0 : 500,
      },
   },

   projects: [
      {
         name: 'chromium',
         use: {
            ...devices['Desktop Chrome'],
         },
      },
   ],
});