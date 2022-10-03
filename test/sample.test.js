import { test, expect } from "@playwright/test";
import message from "test/data.js";

test('homepage has Playwright in title and get started link linking to the intro page', async ({ page }) => {
    await page.goto('http://localhost:4173');
  
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(message);    
  });