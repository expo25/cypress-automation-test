// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// Helper command to fill out the signup form
Cypress.Commands.add('fillSignupForm', (name, email) => {
    cy.get('input[data-qa="signup-name"]').type(name);
    cy.get('input[data-qa="signup-email"]').type(email);
    cy.get('button[data-qa="signup-button"]').click();
});

// Helper command to fill in account details
Cypress.Commands.add('fillAccountDetails', (userData) => {
    cy.get('#id_gender1').check();
    cy.get('input[data-qa="password"]').type(Cypress.env('TEST_PASSWORD'));
    cy.get('select[data-qa="days"]').select(userData.day);
    cy.get('select[data-qa="months"]').select(userData.month);
    cy.get('select[data-qa="years"]').select(userData.year);
    /*
     * Below covers all address locators.
     * Uses data-attributes for stability and clarity, as they persist through UI changes.
     */
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
    cy.get('button[data-qa="create-account"]').click();
});

// Login
Cypress.Commands.add('login', (email, password) => {
    cy.get('a[href="/login"]').click();
    cy.contains('Login to your account').should('be.visible');
    cy.get('input[data-qa="login-email"]').type(email);
    cy.get('input[data-qa="login-password"]').type(password);
    cy.get('button[data-qa="login-button"]').click();
    cy.contains('Logged in as').should('be.visible');
});

// Obtain payment details
Cypress.Commands.add('fillPaymentDetails', (paymentData) => {
    cy.get('input[data-qa="name-on-card"]').type(paymentData.cardName);
    cy.get('input[data-qa="card-number"]').type(paymentData.cardNumber);
    cy.get('input[data-qa="cvc"]').type(paymentData.cvc);
    cy.get('input[data-qa="expiry-month"]').type(paymentData.expiryMonth);
    cy.get('input[data-qa="expiry-year"]').type(paymentData.expiryYear);
});