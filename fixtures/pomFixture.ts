import { chromium, test as baseTest } from "@playwright/test";
import LoginPositive from "../pages/loginPositive.page";
import path from "path"
import ForgetPassword from './../pages/forgatePassword.page';


const test = baseTest.extend<{
    loginPositive: LoginPositive;
    forgetPassword: ForgetPassword;
   
}>({  
    loginPositive: async ({ page }, use) => {
    await use(new LoginPositive(page));
},

forgetPassword: async ({ page }, use) => {
    await use(new ForgetPassword((page)));
}

})
export default test;
export const expect = test.expect;
const capabilities = {
    browserName: "Chrome", // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
    browserVersion: "latest",
    "LT:Options": {
        platform: "Windows 10",
        build: "Playwright Test Build",
        name: "Playwright Test",
        user: '',
        accessKey: '',
        network: true,
        video: true,
        console: true,
        tunnel: false, // Add tunnel configuration if testing locally hosted webpage
        tunnelName: "", // Optional
        geoLocation: '', // country code can be fetched from https://www.lambdatest.com/capabilities-generator/
    },
};