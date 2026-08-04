import { devices, PlaywrightTestConfig } from '@playwright/test';
import LoginPositive from './pages/loginPositive.page';

// const capabilities = {
//     browserName: "Chrome", // Browsers allowed: `Chrome`, `MicrosoftEdge`, `pw-chromium`, `pw-firefox` and `pw-webkit`
//     browserVersion: "latest",
//     "LT:Options": {
//         platform: "Windows 10",
//         build: "Playwright Test from config",
//         name: "Playwright Test - 1",
//         user: '',
//         accessKey: '',
//         network: true,
//         video: true,
//         console: true,
//         tunnel: false, // Add tunnel configuration if testing locally hosted webpage
//         tunnelName: "", // Optional
//         geoLocation: '', // country code can be fetched from https://www.lambdatest.com/capabilities-generator/
//     },
// };
const config: PlaywrightTestConfig = {

   

    projects: [
        {
            name: "chrome:latest:MacOS Catalina@lambdatest",
            use: {
                viewport: { width: 1920, height: 1080 },
            },
        },
        {
            name: "chrome:latest:Windows 10@lambdatest",
            use: {
                viewport: { width: 1280, height: 720 },
            },
        },
        {
            name: "chrome",
            use: {
                ...devices["Desktop Chrome"]
            }
        },
        {
            name: "firefox",
            use: {
                ...devices["Desktop Firefox"]
            }
        }
    ],
    fullyParallel: true,
    retries: process.env.CI ? 1 : 0,
    workers: process.env.CI ? 1 : 1,

    testMatch: ["loginPositive.test.ts"],
    use: {
        // connectOptions: {
        //     wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=
        //     ${encodeURIComponent(JSON.stringify(capabilities))}`
        // },
        baseURL: "https://dev167564.service-now.com/",
        headless: false,
        screenshot: "on",
        video: "on",
        launchOptions: {
            // slowMo: 1000
        },
    },
    timeout: 70 * 1000 * 5,
   
    reporter: [["dot"], ["json", {
        outputFile: "jsonReports/jsonReport.json"
    }], ["html", {
        open: "never"
    }],['./My-Reporter.js']]

    
};

export default config;