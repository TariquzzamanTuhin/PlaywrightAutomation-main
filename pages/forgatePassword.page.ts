import {expect,Page} from "@playwright/test";
export default class ForgetPassword{

    private forgetPageElements={
        titleText:"//title[text()='Log in | ServiceNow']",
        identifyTab:"//li[text()='Identify']",
        verifyTab:"//li[text()='Verify']",
        resetTab:"//li[text()='Reset']",
        forgetPasswordText:"//h1[text()='Forgot password?']",
        forgetPasswordBtn:"//a[contains(text(),'Forgot Password ?')]",
        usernameField:"#sysparm_user_id_0",
        usernameLabel:"(//label[@class='control-label'])[1]",
        forgetPassText:"//h1[text()='Forgot password?']",
        nextBtn:"#sysverb_pwd_reset",
    
    }
    constructor(public page:Page){

    }
    
    async verifyForgetBtnIsVisible() {
        const ele = await this.page.locator(this.forgetPageElements.forgetPasswordBtn);
        try {
            await expect(ele).toContainText("Forgot Password ?")
        } catch (error) {
            throw new Error(`Forget Page | Forgot password Is Not Visible | Could not find locator:"${error}"`)
        }
    }

    async clickForgetBtn() {
        const ele = await this.page.locator(this.forgetPageElements.forgetPasswordBtn)
        try {
            await ele.click({ button: "left", delay: 1000 })
            await this.page.waitForLoadState("domcontentloaded")
        } catch (error) {
            throw new Error(` Login Page | Forgot password Button Is Not Visible | Could not find locator:"${error}"`)
        }
    }

    async verifyIdentifyTabIsVisible() {
        const ele = await this.page.locator(this.forgetPageElements.identifyTab);
        try {
            await expect(ele).toContainText("Identify")
        } catch (error) {
            throw new Error(`Forget Page | Identify Tab Is Not Visible | Could not find locator:"${error}"`)
        }
    }

    async verifyVerifyTabIsVisible() {
        const ele = await this.page.locator(this.forgetPageElements.verifyTab);
        try {
            await expect(ele).toContainText("Verify")
        } catch (error) {
            throw new Error(`Forget Page | Verify Tab Is Not Visible | Could not find locator:"${error}"`)
        }
    }

    async verifyResetTabIsVisible() {
        const ele = await this.page.locator(this.forgetPageElements.resetTab);
        try {
            await expect(ele).toContainText("Reset")
        } catch (error) {
            throw new Error(`Forget Page | Reset Tab Is Not Visible | Could not find locator:"${error}"`)
        }
    }

    async verifyUsernameLabelIsVisible() {
        const ele = await this.page.locator(this.forgetPageElements.usernameLabel);
        try {
            await expect(ele).toContainText("User name")
        } catch (error) {
            throw new Error(`Forget Page | User name Label Is Not Visible | Could not find locator:"${error}"`)
        }
    }

    async verifyUsernameFieldIsVisible(username: string) {
        const ele = await this.page.locator(this.forgetPageElements.usernameField);
        try {
            await ele.fill(username);
        } catch (error) {
            throw new Error(`Forget Page | User name Field Is Not Visible | Could not find locator:"${error}"`)
        }
    }

    async verifyNextBtnlIsVisible() {
        const ele = await this.page.locator(this.forgetPageElements.nextBtn);
        try {
            await expect(ele).toContainText("Next")
        } catch (error) {
            throw new Error(`Forget Page | Next button Is Not Visible | Could not find locator:"${error}"`)
        }
    }

    async clickNextBtn() {
        const ele = await this.page.locator(this.forgetPageElements.nextBtn)
        try {
            await ele.click({ button: "left", delay: 1000 })
            await this.page.waitForLoadState("domcontentloaded")
        } catch (error) {
            throw new Error(` Login Page | Next button Is Not Visible | Could not find locator:"${error}"`)
        }
    }


    async verifyForgetTextIsVisible() {
        const ele = await this.page.locator(this.forgetPageElements.forgetPassText);
        try {
            await expect(ele).toContainText("Forgot password?")
        } catch (error) {
            throw new Error(`Forget Page | Forgot password Is Not Visible | Could not find locator:"${error}"`)
        }
    }

}