## Purpose of Project
🔸 This is a beginner automation test project that utilizes Cypress.<br>
🔸 It assumes you have the basic understanding of javascript, node, the cli & test automation as a whole.<br>
🔸 The goal is to prove automation competency using our tool of choice by writing test scripts for a [sample e-commerce website.](https://automationexercise.com/)<br>
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
🔸 Run all tests headlessly be default:
```ps1
npx cypress run
```
🔸 Run tests with the UI displaying:
```ps1
npx cypress run --headed
```
🔸 My `package.json` files contains a script that allows us to run tests native to the 'e2e' folder using my browser choice of msedge:
```json
  "scripts": {
    "e2e:edge": "cypress run --browser edge"
  },
```
🔸 You can run it from the terminal using:
```ps1
npm run e2e:edge
```
🔸 Run specific test files:
```ps1
npx cypress run --spec "cypress/e2e/name-of-file.cy.js"
```
## Additional Information
🔸 I have the 'node_modules' folder added to the `.gitignore` file.<br> 
🔸 In stricter cases, I might not do this. However, I don't care about reproducible builds here. Plus, we have a `package-lock.json` file included by git.<br>
🔸 If you'd like a direct copy of my 'node_modules,' contact me.<br>
🔸 The MIT liscense which allows us to use Cypress's software as my own was pulled from Cypress's GitHub repo & included [here](./LICENSE.txt) in the project's root.<br>
🔸 [Click here](https://medium.com/@shalininagaraj1990/what-are-fixtures-in-cypress-5fd1ed0298b8) to find a good introductory article I found that explains how to use fixtures in Cypress.

## Environment Variables
🔸 You'll need to add the following variables to your `.env` file:
```.env
TEST_PASSWORD=
TEST_MOBILE_NUMBER=
```

## Tools Used
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)<br>
![npm](https://img.shields.io/badge/npm-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)<br>
![Cypress](https://img.shields.io/badge/Cypress-%2317202C.svg?style=for-the-badge&logo=cypress&logoColor=white)<br>
![Markdown](https://img.shields.io/badge/markdown-%23000000.svg?style=for-the-badge&logo=markdown&logoColor=white) 
