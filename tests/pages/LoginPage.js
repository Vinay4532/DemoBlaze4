const { BasePage } = require("../../utils/BasePage");

class LoginPage extends BasePage
{
    constructor(page)
    {
         super(page);
        
        this.loginLink=page.locator('//a[@id="login2"]')
        this.usernamefield=page.locator('//input[@id="loginusername"]')
        this.passwordfield=page.locator('//input[@id="loginpassword"]')
        this.loginButton=page.locator('//button[normalize-space()="Log in"]')
        this.loggedUser = page.locator('#nameofuser');
    }
    async open()
    {
        await this.navigate("https://www.demoblaze.com");
    }
     async login(user,pass)
     {
       

    await this.click(this.loginLink);

    await this.wait(this.usernamefield);

    

    await this.fill(this.usernamefield, user);



    await this.fill(this.passwordfield, pass);

   

    await this.click(this.loginButton);

   
     }
}
module.exports = { LoginPage };