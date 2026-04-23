const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');
const { InventoryPage } = require('../pages/inventoryPage');

test.describe('Checkout validation', () => {
  test('shows validation error when first name is missing', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const inventoryPage = new InventoryPage(page);

    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');

    await inventoryPage.addBackpackToCart();
    await inventoryPage.cartLink.click();
    await page.locator('[data-test="checkout"]').click();

    await page.locator('[data-test="lastName"]').fill('Dasov');
    await page.locator('[data-test="postalCode"]').fill('77389');
    await page.locator('[data-test="continue"]').click();

    await expect(page.locator('[data-test="error"]')).toContainText('First Name is required');
  });
});
