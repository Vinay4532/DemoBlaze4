const { BasePage } = require("../../utils/BasePage");

class ProductPage extends BasePage{
    constructor(page)
    {
        super(page)
        this.addToCartBtn = page.locator("//a[text()='Add to cart']");
    }

    async addToCart()
    {
        this.page.once('dialog',async dialog=>
        {

              console.log(dialog.message());
              await dialog.accept();
        }
        )
        await this.click(this.addToCartBtn)
    }

}
module.exports = {ProductPage};