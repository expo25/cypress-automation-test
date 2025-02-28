describe('User Login and Logout', () => {
    beforeEach(() => {
        // Load fixture data
        cy.fixture('user-data.json').then(function (userData) {
            this.userData = userData;
            this.userData.password = Cypress.env('TEST_PASSWORD');
        });
        cy.visit('/');
    });

    it('Verify Login/Logout functionality', function () {
        // Load registered-user.json directly in the test
        cy.fixture('registered-user.json').then((registeredUser) => {
            cy.get('a[href="/login"]').click();
            cy.contains('Login to your account').should('be.visible');

            cy.login(registeredUser.email, registeredUser.password);

            cy.contains(`Logged in as ${this.userData.name}`).should('be.visible');
            cy.url().should('eq', Cypress.config('baseUrl'));

            cy.get('a[href="/logout"]').click();

            cy.url().should('include', '/login');
            cy.contains('Login to your account').should('be.visible');
            cy.contains('Logged in as').should('not.exist');
        });
    });
});