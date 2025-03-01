## Purpose of Project
🔸 This is a beginner automation test project that utilizes Cypress.<br>
🔸 It assumes you have the basic understanding of javascript, node, the cli & test automation as a whole.<br>
🔸 The goal is to prove automation competency using Cypress by writing test scripts for a [sample e-commerce website.](https://automationexercise.com/)<br>
🔸 I am literally learning how to use this tool as I go.

## Installation Guide
🔸 This follows the [Cypress Docs](https://docs.cypress.io/) website to get us started.<br>
🔸 Open up the folder where your project root is in VS Code.<br>
🔸 Open up the terminal.<br>
🔸 Verify you have [node.js](https://nodejs.org/en/download/) installed. This installation link should install npm & also add node to your `PATH` system environment variable automatically. Verify the installation on Windows:
```ps1
npm -v
# Expected output: 10.9.2 (Latest)

node -v
# Expected output: 23.9.0 (Latest)
```

🔸 Run:
```ps1
npm install cypress --save-dev
```
🔸 This will install the neccesary packaging needed for your project.<br>
🔸 Open the Cypress UI:
```ps1
npx cypress open
```
🔸 A separate pop-up window should appear where you can setup your project configuration.<br>
🔸 Once you choose your browser, you can either setup your scripts via the UI or the `cy.js` files.<br>
🔸 Run all tests headlessly by default:
```ps1
npx cypress run
```
🔸 Run tests with the UI displaying:
```ps1
npx cypress run --headed
```
🔸 My `package.json` file contains a script that allows us to run tests native to the 'e2e' folder using my browser choice of Microsoft Edge.<br>
🔸 You can adjust to use your browser of choice.<br>
```json
  "scripts": {
    "e2e:edge": "cypress run --browser edge"
  },
```
🔸 You can run it from the terminal using:
```ps1
npm run e2e:edge
```
🔸 How to run specific test files:
```ps1
# Single test file 👇🏽
npx cypress run --spec "cypress/e2e/name-of-file.cy.js"
# Multiple test files 👇🏽
npx cypress run --spec "cypress/e2e/name-of-first-file.cy.js,name-of-SECOND-file.cy.js"
```
## Additional Information
🔸 I have the `node_modules` folder added to the `.gitignore` file.<br> 
🔸 In stricter cases, I might not do this. However, I don't care about reproducible builds here. Plus, we have a `package-lock.json` file included in this remote repo.<br>
🔸 If you'd like a direct copy of my `node_modules`, contact me.<br>
🔸 The MIT liscense which allows us to use Cypress's software as my own was pulled from Cypress's GitHub repo & included [here](./LICENSE.txt) in the project's root.<br>
🔸 [Click here](https://medium.com/@shalininagaraj1990/what-are-fixtures-in-cypress-5fd1ed0298b8) to find a good introductory article I found that explains how to use fixtures in Cypress.

## Environment Variables
🔸 Create a file called `cypress.env.json` in your project's root. This will host variables containing sensitive test data that we don't want in git. <br>
🔸 Add the following to the file:
```.env
TEST_PASSWORD=
TEST_MOBILE_NUMBER=
```
🔸 It would be best to include data found in the [cc-payment-details](./cypress/fixtures/cc-payment-details.json) file as environment variables since it contains sensitive test data like credit card information.<br>
🔸 But I don't because the data is:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 🔸 Fake.<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 🔸 Helps us better understand fixtures by using multiple files within the test suite.<br>
🔸 What will the GitHub bots have to say about this? 🤔

## Test Dependencies
🔸 Some tests, such as the [user-registration test](./cypress/e2e/user-registration.cy.js) create new credentials by registering a new user.<br>
🔸 These credentials are then dynamically generated in a `.json` file, and then used subsequentially in the [login test](./cypress/e2e/login.cy.js).<br>
🔸 Therefore, it is reccomended to execute these tests in the following order:<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 🔸 `user-registration.cy.js`<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 🔸 `login.cy.js`<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 🔸 `add-to-cart.js`<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 🔸 `checkout.cy.js`

## Tools Used
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)<br>
![npm](https://img.shields.io/badge/npm-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)<br>
![Cypress](https://img.shields.io/badge/Cypress-%2317202C.svg?style=for-the-badge&logo=cypress&logoColor=white)<br>
![Markdown](https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white) 
