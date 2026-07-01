class BasePage
{
    constructor(page)
    {
        this.page=page
    }
    //navigation method
    async navigate(url)
    {
        await this.page.goto(url)
    }
    async click(locator)//click
    {
        await locator.click()
    }
    //fill
    async fill(locator,value)
    {
        await locator.fill(value)
    }
    //wait
    async wait(locator)
    {
         await locator.waitFor({
        state: 'visible'
    });
    }
    //text
    async gettext(locator)
    {
        return await locator.textContent();
    }
}
module.exports = { BasePage };