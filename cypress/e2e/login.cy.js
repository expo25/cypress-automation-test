describe('User Login and Logout', () => {
    beforeEach(() => {
        // Load fixture data using the specified method
        cy.fixture('user-data.json').then(function (userData) {
            this.userData = userData;
            // Retrieve credentials
            this.userData.password = Cypress.env('TEST_PASSWORD');
        });
        // Load registered user credentials from registered-user.json
        cy.fixture('registered-user.json').then(function (registeredUser) {
            this.registeredUser = registeredUser;
        });

        cy.visit('/');
    });
});

it('Verify Login/Logout functionality', function () {
    // Navigate to login page
    cy.get('a[href="/login"]').click();
    cy.contains('Login to your account').should('be.visible');

    // custom login command from dynamically generated registered user file
    cy.login(this.registeredUser.email, this.registeredUser.password);

    // Verify successful login and redirection to dashboard
    cy.contains(`Logged in as ${this.userData.name}`).should('be.visible');
    cy.url().should('eq', Cypress.config('baseUrl'));
    
    // logout
    cy.get('a[href="/logout"]').click();

    // Verify session termination and redirection to login page
    cy.url().should('include', '/login');
    cy.contains('Login to your account').should('be.visible');
    cy.contains('Logged in as').should('not.exist');
});