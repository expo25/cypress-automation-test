import { generateRandomEmail } from "../support/utils";

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
        cy.visit('/');
    });
    it('Verify a new user was successfully registered', function () {
        // Navigate to signup page & fill out form
        cy.get('a[href="/login"]').click();
        cy.contains('New User Signup!').should('be.visible');
        cy.fillSignupForm(this.userData.name, this.userData.email);

        // Create & verify account
        cy.contains('Enter Account Information').should('be.visible');
        cy.fillAccountDetails(this.userData);
        cy.contains('Account Created!').should('be.visible');
        cy.get('a[data-qa="continue-button"]').click();
        cy.contains(` Logged in as ${this.userData.name}`).should('be.visible');

        // Write dynamically generated credentials to json file to use in next test(s).
        cy.writeFile('cypress/fixtures/registered-user.json', {
            email: this.userData.email, // Obtained from generateRandomEmail()
            password: this.userData.password, // Obtained from Cypress.env('TEST_PASSWORD')
        });

        // Logout
        cy.get('a[href="/logout"]').click();
    });
})