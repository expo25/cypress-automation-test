const { generateRandomEmail } = require("../support/utils");

describe('New user registration', () => {
    beforeEach(() => {
        // load data from fixture
        cy.fixture('user-data.json').then(function (userData) {
            this.userData = userData;
            // Retreive credentials
            this.userData.email = generateRandomEmail();
            this.userData.password = Cypress.env('TEST_PASSWORD');
            this.userData.mobileNumber = Cypress.env('TEST_MOBILE_NUMBER');
        });
        // Nav to homepage
        cy.visit('/');
    });
    it('Verify a new user was successfully registered', function () {
        // Navigate to signup page
        cy.get('a[href="/login"]').click();
        cy.contains('New User Signup!').should('be.visible');

        // Fill out signup form with generated unique email
        cy.fillSignupForm(this.userData.name, this.userData.email);

        // Verify we're on the account creation page
        cy.contains('Enter Account Information').should('be.visible');

        // Fill out account details
        cy.fillAccountDetails(this.userData);

        // Verify successful account creation
        cy.contains('Account Created!').should('be.visible');

        // Click Continue button
        cy.get('a[data-qa="continue-button"]').click();

        // Verify user is logged in
        cy.contains(` Logged in as ${this.userData.name}`).should('be.visible');

        // Store credentials in environment variable for future use
        Cypress.env('registeredUser', {
            email: this.userData.email,
            password: this.userData.password
        });

        // Logout
        cy.get('a[href="/logout"]').click();
    });
})