import {Browser, chromium, expect,Page} from "@playwright/test";
export default class LoginPositive{

    private loginPageElements={
        titleText:"//title[text()='Log in | ServiceNow']",
        userName:"//label[@for='user_name']",
        usernameInputField:"#user_name",
        passwordText:"(//label[@class='control-label'])[2]",
        passwordInputField:"#user_password",
        forgetPasswordText:"//a[contains(text(),'Forgot Password ?')]",
        logInBtn:"#sysverb_login",
        titleTextHome:"//title[text()='ServiceNow']",
        errorMsg1:"//div[text()='Invalid input in user name!']",
        errorMsg2:"//div[@class='dp-invalid-login']//span[1]",
        eyeBtn:"//button[contains(@class,'btn btn-default')]",
    }
    constructor(public page:Page){

    }

    async verifyTitleTextIsVisible() {
        const ele = await this.page.title();
        try {
            await expect(ele).toBe("Log in | ServiceNow")
        } catch (error) {
            throw new Error(`Login Page | Title Text Is Not Visible | Could not find locator:"${error}"`)
        }
    }

    async verifyUserNameTextIsVisible() {
        const ele = await this.page.locator(this.loginPageElements.userName)
        try {
            await expect(ele).toContainText("User name")
        } catch (error) {
            throw new Error(`Login Page | UserName Text Is Not Visible | Could not find locator:"${error}"`)
        }
    }

    async inputUserName(username: string) {
        const ele = this.page.locator(this.loginPageElements.usernameInputField)
        try {
            await ele.fill(username)
        } catch (error) {
            throw new Error(` Login Page | UserName Input Field Is Not Visible | Could not find locator:"${error}"`)
        }

    }

    async verifyPasswordTextIsVisible() {
        const ele = await this.page.locator(this.loginPageElements.passwordText)
        try {
            await expect(ele).toContainText("Password")
        } catch (error) {
            throw new Error(`Login Page | Password Text Is Not Visible | Could not find locator:"${error}"`)
        }
    }

    async inputPassword(password: string) {
        const ele = this.page.locator(this.loginPageElements.passwordInputField)
        try {
            await ele.fill(password)
        } catch (error) {
            throw new Error(`Login Page | Password Input Field Is Not Visible | Could not find locator:"${error}"`)
        }

    }

    async verifyForgetPasswordTextIsVisible() {
        const ele = await this.page.locator(this.loginPageElements.forgetPasswordText)
        try {
            await expect(ele).toContainText("Forgot Password ?")
        } catch (error) {
            throw new Error(`Login Page | Foget Password Text Is Not Visible | Could not find locator:"${error}"`)
        }
    }
    async verifyLogInButtonIsVisible() {
        const ele = await this.page.locator(this.loginPageElements.logInBtn)
        try {
            await expect(ele).toContainText("Log in")
        } catch (error) {
            throw new Error(`Login Page | Log In Button Is Not Visible | Could not find locator:"${error}"`)
        }
    }

    async clickLoginBtn() {
        const ele = await this.page.locator(this.loginPageElements.logInBtn)
        try {
            await ele.click({ button: "left", delay: 1000 })
            await this.page.waitForLoadState("domcontentloaded")
        } catch (error) {
            throw new Error(` Login Page | Login Button Is Not Visible | Could not find locator:"${error}"`)
        }
    }

    async verifyHomeTitleTextIsVisible() {
        const ele = await this.page.title();
        try {
            await expect(ele).toBe("ServiceNow")
        } catch (error) {
            throw new Error(`Login Page | Title Text Is Not Visible | Could not find locator:"${error}"`)
        }
    }

    async login(username: string, password: string) {
        await this.inputUserName(username);
        await this.inputPassword(password);
        await this.clickLoginBtn();
    }

    async verifyErrorMsg1IsVisible() {
        const ele = await this.page.locator(this.loginPageElements.errorMsg1)
        try {
            await expect(ele).toContainText("Invalid input in user name!")
        } catch (error) {
            throw new Error(`Login Page |  error message as Invalid input in user name! Is Not Visible | Could not find locator:"${error}"`)
        }
    }

    async verifyErrorMsg2IsVisible() {
        const ele = await this.page.locator(this.loginPageElements.errorMsg2)
        try {
            await expect(ele).toContainText("User name or password invalid. To reset your admin password click ")
        } catch (error) {
            throw new Error(`Login Page |  error message contains User name or password invalid Is Not Visible | Could not find locator:"${error}"`)
        }
    }

    async clickEyeBtn() {
        const ele = await this.page.locator(this.loginPageElements.eyeBtn)
        try {
            await ele.click({ button: "left", delay: 1000 })
        } catch (error) {
            throw new Error(`Login Page | Eye Button Is Not Visble | Could not find locator:"${error}"`)
        }
    }

    async runDynamicDataVisualComparisonTest(): Promise<void> {
        const browser: Browser = await chromium.launch();
        const context = await browser.newContext();
        const page: Page = await context.newPage();
        
        // Navigate to the web page with dynamic data.
        await page.goto('https://qa-2.testingdxp.com//games/post-up/mainboard/?&configurationId=645c843672d8a82cfdd229a2&mainboardId=645c843772d8a82cfdd229a4');
        await page.waitForLoadState();
      
        // Wait for the dynamic data to load and be displayed on the page.
        // You can use various methods to wait for specific elements or data to appear.
        await page.waitForSelector("(//div[@class='MuiBox-root css-1sfllg6']//div)[2]");
      
        // Take a screenshot of the page with dynamic data.
        await page.screenshot({ path: 'screenshots/dynamic-data-example.png' });
      
        await browser.close();
      }
}