import test,{expect } from '../fixtures/pomFixture';
import * as data from "../testData/loginTestData.json";



test("01 Login Positive | Verify login with valid credentials", async ({ loginPositive, page, browser }) => {

  await page.goto('/navpage.do', { waitUntil: 'domcontentloaded' })

  await loginPositive.login(data.username, data.password)
  const title = await page.title();

})
test("02 Login Positive | Verify Home Page Title Visible", async ({ loginPositive, page, browser }) => {
  await page.goto('/navpage.do', { waitUntil: 'domcontentloaded' })
  await loginPositive.login(data.username, data.password)
  await page.waitForTimeout(15000)
  await loginPositive.verifyHomeTitleTextIsVisible()
})
test("03 Login Positive | Verify Title Visibly", async ({ loginPositive, page, browser }) => {
  await page.goto('/navpage.do', { waitUntil: 'domcontentloaded' })
  await loginPositive.verifyTitleTextIsVisible()
})

test("04 Login Positive | Verify username text field has label of User name", async ({ loginPositive, page, browser }) => {
  await page.goto('/navpage.do', { waitUntil: 'domcontentloaded' })
  await loginPositive.verifyUserNameTextIsVisible()
})

test("05 Login Positive | Verify passoword text field has label of Password", async ({ loginPositive, page, browser }) => {
  await page.goto('/navpage.do', { waitUntil: 'domcontentloaded' })
  await loginPositive.verifyPasswordTextIsVisible()
})

test("06 Login Positive | Verify forgot password is visible to the user", async ({ loginPositive, page, browser }) => {
  await page.goto('/navpage.do', { waitUntil: 'domcontentloaded' })
  await loginPositive.verifyForgetPasswordTextIsVisible()
})

test("07 Login Positive | Verify user can see the login button", async ({ loginPositive, page, browser }) => {
  await page.goto('/navpage.do', { waitUntil: 'domcontentloaded' })
  await loginPositive.verifyLogInButtonIsVisible()
})

test("08 Login Negative | Verify title is ServiceNow", async ({ loginPositive, page, browser }) => {
  await page.goto('/navpage.do', { waitUntil: 'domcontentloaded' })
  await loginPositive.verifyTitleTextIsVisible()
})

test("09 Login Negative | Verify the error message as Invalid input in user name!", async ({ loginPositive, page, browser }) => {
  await page.goto('/navpage.do', { waitUntil: 'domcontentloaded' })
  await loginPositive.clickLoginBtn()
  await loginPositive.verifyErrorMsg1IsVisible()
})

test("10 Login Negative | Verify the error message contains User name or password invalid", async ({ loginPositive, page, browser }) => {
  await page.goto('/navpage.do', { waitUntil: 'domcontentloaded' })
  await loginPositive.inputUserName(data.username)
  await loginPositive.clickLoginBtn()
  await loginPositive.verifyErrorMsg2IsVisible()
})

test("11 Login | Verify Eye Button Functionality Is Working", async ({ loginPositive, page, browser }) => {
  await page.goto('/admin/#/sign-in', { waitUntil: 'domcontentloaded' })
  await page.waitForNavigation()
  await loginPositive.inputPassword(data.invalidpassword)
  await loginPositive.clickEyeBtn()
  await expect(page.locator("#user_password")).toHaveAttribute('type','text')
})

test.only("12 Visual comparison", async ({ loginPositive, page, browser }) => {
 await loginPositive.runDynamicDataVisualComparisonTest()
})
