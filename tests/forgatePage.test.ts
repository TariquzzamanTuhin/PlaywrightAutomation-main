import test,{expect } from '../fixtures/pomFixture';
import * as data from "../testData/loginTestData.json";



test("01 Forgate page | Verify User should see the forgot password", async ({ forgetPassword, page, browser }) => {

  await page.goto('/navpage.do', { waitUntil: 'domcontentloaded' })

  await forgetPassword.verifyForgetBtnIsVisible()

})
test("02 Forgate page | Verify forgot password button is clikable", async ({ forgetPassword, page, browser }) => {

    await page.goto('/navpage.do', { waitUntil: 'domcontentloaded' })
  
    await forgetPassword.clickForgetBtn()
  
  })

  test("03 Forgate page | Verify three tabs as Identify, Verify & Reset is Visible", async ({ forgetPassword, page, browser }) => {

    await page.goto('/$pwd_reset.do?sysparm_url=ss_default', { waitUntil: 'domcontentloaded' })
  
    await forgetPassword.verifyIdentifyTabIsVisible()
    await forgetPassword.verifyVerifyTabIsVisible()
    await forgetPassword.verifyResetTabIsVisible()
  
  })

  test("04 Forgate page | Verify the Forget password text is Visible", async ({ forgetPassword, page, browser }) => {

    await page.goto('/$pwd_reset.do?sysparm_url=ss_default', { waitUntil: 'domcontentloaded' })
  
    await forgetPassword.verifyForgetTextIsVisible()
 
  
  })

  test("05 Forgate page | Verify the Username Label is Visible", async ({ forgetPassword, page, browser }) => {

    await page.goto('/$pwd_reset.do?sysparm_url=ss_default', { waitUntil: 'domcontentloaded' })
  
    await forgetPassword.verifyUsernameLabelIsVisible()
  
  })

  test("06 Forgate page | Verify the Username field is being filled", async ({ forgetPassword, page, browser }) => {

    await page.goto('/$pwd_reset.do?sysparm_url=ss_default', { waitUntil: 'domcontentloaded' })
  
    await forgetPassword.verifyUsernameFieldIsVisible(data.username)
  
  })

  test("07 Forgate page | Verify the Next Button is Visible", async ({ forgetPassword, page, browser }) => {

    await page.goto('/$pwd_reset.do?sysparm_url=ss_default', { waitUntil: 'domcontentloaded' })
  
    await forgetPassword.verifyNextBtnlIsVisible()
  
  })

  test("08 Forgate page | Verify the Next button is clikable", async ({ forgetPassword, page, browser }) => {

    await page.goto('/$pwd_reset.do?sysparm_url=ss_default', { waitUntil: 'domcontentloaded' })
  
    await forgetPassword.clickNextBtn()
  
  })