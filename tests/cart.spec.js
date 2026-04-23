const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');
const { InventoryPage } = require('../pages/inventoryPage');

test.describe('Cart behavior', () => {
  test.beforeEach(async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
  });

  test('user can add an item to the cart', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);

    await inventoryPage.addBackpackToCart();

    await expect(inventoryPage.cartBadge).toHaveText('1');
  });

  test('user can remove an item from the cart', async ({ page }) => {
    const inventoryPage = new InventoryPage(page);

    await inventoryPage.addBackpackToCart();
    await expect(inventoryPage.cartBadge).toHaveText('1');

    await inventoryPage.removeBackpackFromCart();
    await expect(inventoryPage.cartBadge).toHaveCount(0);
  });
});
