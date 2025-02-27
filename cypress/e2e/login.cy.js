describe('User Login and Logout', () => {
    beforeEach(() => {
        // Load fixture data using the specified method
        cy.fixture('user-data.json').then(function (userData) {
            this.userData = userData;
            // Retrieve credentials
            this.userData.password = Cypress.env('TEST_PASSWORD');
        });
        // Nav to homepage
        cy.visit('/');

        const registeredUser = Cypress.env('registeredUser');
        if (!registeredUser || !registeredUser.email || !registeredUser.password) {
            throw new Error('Registered user credentials not found. Ensure the registration test runs first and successfully sets Cypress.env("registeredUser").');
        }
    });

    it('Verify Login/Logout functionality', function () {
        // Navigate to login page
        cy.get('a[href="/login"]').click();
        cy.contains('Login to your account').should('be.visible');

        // Fill login form with stored credentials from registration test
        cy.get('input[data-qa="login-email"]').type(Cypress.env('registeredUser').email);
        cy.get('input[data-qa="login-password"]').type(Cypress.env('registeredUser').password);
        cy.get('button[data-qa="login-button"]').click();

        // Verify successful login and redirection to dashboard
        cy.contains(`Logged in as ${this.userData.name}`).should('be.visible');
        cy.url().should('eq', Cypress.env('url'));

        // logout
        cy.get('a[href="/logout"]').click();

        // Verify session termination and redirection to login page
        cy.url().should('include', '/login');
        cy.contains('Login to your account').should('be.visible');
        cy.contains('Logged in as').should('not.exist');
    });
});