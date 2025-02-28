describe('Checkout Process', () => {
    beforeEach(() => {
        // Load fixture data
        cy.fixture('user-data.json').then(function (userData) {
            this.userData = userData;
        });
        cy.visit('/');
    });
    it('Verify user can complete the checkout process', function () {
        // Load fixture data & navigate to cart.
        cy.fixture('registered-user.json').then((registeredUser) => {
            cy.login(registeredUser.email, registeredUser.password);
            cy.get('a[href="/products"]').click();
            cy.get('.productinfo').first().find('a[data-product-id]').click();
            cy.get('.modal-footer').contains('Continue Shopping').click();

            cy.get('a[href="/view_cart"]').first().click();
            cy.url().should('include', '/view_cart');
            cy.contains('Shopping Cart').should('be.visible');

            // Proceed to checkout
            cy.get('a.btn.check_out').contains('Proceed To Checkout').click();

            // Verify delivery address matches user data
            cy.get('.checkout-information').within(() => {
                cy.contains(this.userData.firstName + ' ' + this.userData.lastName).should('be.visible');
                cy.contains(this.userData.address1).should('be.visible');
                cy.contains(this.userData.city + ' ' + this.userData.state + ' ' + this.userData.zipcode).should('be.visible');
            });
            cy.get('a.btn.check_out').contains('Place Order').scrollIntoView().click();

            // This should be coming from a fixture file, I just did not have time to add it.
            cy.fillPaymentDetails({
                cardName: 'Test User',
                cardNumber: '4111111111111111',
                cvc: '123',
                expiryMonth: '12',
                expiryYear: '2025',
            });

            // Place an order
            cy.get('button[data-qa="pay-button"]').click();
            // Verify success message then continue to homePage
            cy.contains('Order Placed!').should('be.visible');
            cy.contains('Congratulations! Your order has been confirmed!').should('be.visible');
            cy.get('a[data-qa="continue-button"]').click();
            cy.url().should('eq', Cypress.config('baseUrl'));
        });
    });
});