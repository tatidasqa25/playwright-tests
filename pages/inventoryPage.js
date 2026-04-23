class InventoryPage {
  constructor(page) {
    this.page = page;
    this.title = page.locator('[data-test="title"]');
    this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');
    this.cartLink = page.locator('[data-test="shopping-cart-link"]');
  }

  addBackpackToCart() {
    return this.page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  }

  removeBackpackFromCart() {
    return this.page.locator('[data-test="remove-sauce-labs-backpack"]').click();
  }
}

module.exports = { InventoryPage };
