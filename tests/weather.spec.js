import {test, expect} from "@playwright/test";

test("User is able to search a city and see the result", async ({ page }) => {
    // Can run locally by switching URL
    await page.goto("https://weather-pwa2.netlify.app/");

    // Find the input, enter a value and submit the form
    await page.locator("#city-input").fill("Beijing");
    await page.locator("#city-input").press("Enter");

    // Check the website title
    await expect(page).toHaveTitle(/Weather/i);

    // Check if input information match the display
    await expect(page.locator(".today-card__city")).toContainText("Beijing", { ignoreCase: true });
    // Check if either "°C", "°F" unit is displayed properly
    await expect(page.locator(".today-card__unit")).toContainText(/°[CF]/);

})