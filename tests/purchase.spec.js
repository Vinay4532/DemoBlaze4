const { test, expect } = require('@playwright/test');

const { LoginPage } = require('./pages/LoginPage');
const { HomePage } = require('./pages/HomePage');
const { ProductPage } = require('./pages/ProductPage');
const { CartPage } = require('./pages/CartPage');

const data = require('./fixtures/testData.json');

test('Purchase Product E2E Flow', async ({ page }) => {


    const login = new LoginPage(page);
    const home = new HomePage(page);
    const product = new ProductPage(page);
    const cart = new CartPage(page)
    await login.open()
    await login.login(data.username,data.password)
    await home.selectProduct(data.product)
    await product.addToCart();
    await cart.openCart();
    await cart.placeOrder(data.order)
})