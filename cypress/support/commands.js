// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// Helper commands used to fill out the signup form(s)
Cypress.Commands.add('fillSignupForm', (name, email) => {
    // Here we use attribute selectors.
    cy.get('input[data-qa="signup-name"]').type(name);
    cy.get('input[data-qa="signup-email"]').type(email);
    cy.get('button[data-qa="signup-button"]').click();
});

// Helper command to fill in account details
Cypress.Commands.add('fillAccountDetails', (userData) => {
    // Here we utilize ID selectors.
    cy.get('#id_gender1').check();
    // Password
    cy.get('input[data-qa="password"]').type(Cypress.env('TEST_PASSWORD'));
    // Date of birth
    cy.get('select[data-qa="days"]').select(userData.day);
    cy.get('select[data-qa="months"]').select(userData.month);
    cy.get('select[data-qa="years"]').select(userData.year);
    /***************************************************************************************************************\
    | Below should cover all address locators.                                                                      |                  
    | Here we utilize data-attributes.                                                                              |
    | This is the method I prefer for testing cause these are most stable & will still work even after UI changes.  |
    | They also clearly state their purpose.                                                                        |
    \***************************************************************************************************************/
    cy.get('input[data-qa="first_name"]').type(userData.firstName);
    cy.get('input[data-qa="last_name"]').type(userData.lastName);
    cy.get('input[data-qa="company"]').type(userData.company);
    cy.get('input[data-qa="address"]').type(userData.address1);
    cy.get('input[data-qa="address2"]').type(userData.address2);
    cy.get('select[data-qa="country"]').select(userData.country);
    cy.get('input[data-qa="state"]').type(userData.state);
    cy.get('input[data-qa="city"]').type(userData.city);
    cy.get('input[data-qa="zipcode"]').type(userData.zipcode);
    cy.get('input[data-qa="mobile_number"]').type(Cypress.env('TEST_MOBILE_NUMBER'));
    // Submit the actual form
    cy.get('button[data-qa="create-account"]').click();
})
