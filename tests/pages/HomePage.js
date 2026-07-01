const { BasePage } = require("../../utils/BasePage");

class HomePage extends BasePage
{
    constructor(page)
    {
        super(page)
        this.products = page.locator("//h4[@class='card-title']/a")
    }

     async selectProduct(productName)
     {
        let count = await this.products.count();
        for(let i=0;i<count;i++)
        {
                   let text = await this.gettext(this.products.nth(i))
                   if(text.includes(productName))
                   {
                    await this.click(this.products.nth(i));
await this.page.waitForLoadState('load');
break;
                   }
        }
     }

}
module.exports = { HomePage };