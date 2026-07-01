const { BasePage } = require('../../utils/BasePage');

class CartPage extends BasePage {

    constructor(page) {

        super(page);

        this.cartLink = page.locator("#cartur");

        this.placeOrderBtn = page.locator("//button[text()='Place Order']");

        this.name = page.locator("#name");
        this.country = page.locator("#country");
        this.city = page.locator("#city");
        this.card = page.locator("#card");
        this.month = page.locator("#month");
        this.year = page.locator("#year");

        this.purchaseBtn = page.locator("//button[text()='Purchase']");

        this.successMsg = page.locator(".sweet-alert h2");
    }

    async openCart() {
        await this.click(this.cartLink);
    }

    async placeOrder(order) {

        await this.click(this.placeOrderBtn);

        await this.fill(this.name, order.name);
        await this.fill(this.country, order.country);
        await this.fill(this.city, order.city);
        await this.fill(this.card, order.card);
        await this.fill(this.month, order.month);
        await this.fill(this.year, order.year);

        await this.click(this.purchaseBtn);
    }

}

module.exports = { CartPage };