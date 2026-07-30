import {defineConfig, devices} from '@playwright/test';

export default defineConfig({
   testDir: './src/tests',
   fullyParallel: true,
   forbidOnly: !!process.env.CI,
   retries: process.env.CI ? 2 : 0,
   workers: process.env.CI ? 1 : undefined,
   reporter: 'html',
   use: {
      trace: 'on-first-retry',
      headless: false, // false will show browser
      launchOptions: {
         slowMo: 700, // Slow down actions by 500ms (adjust as needed)
      },
   },
   projects: [
      {
         name: 'chromium',
         use: {...devices['Desktop Chrome']},
      },
   ],
});