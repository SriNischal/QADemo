import type { PlaywrightTestConfig } from '@playwright/test';
import { devices,Browser } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: './tests/*',
  /* Maximum time one test can run for. */
  timeout: 40 * 1000,
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 5000
  },

  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    
    browserName : 'chromium',
    headless : false
 
  },

};

export default config;
