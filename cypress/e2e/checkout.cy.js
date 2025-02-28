describe('Checkout Process', () => {
    beforeEach(() => {
        // Load user data and registered credentials
        cy.fixture('user-data.json').then(function (userData) {
            this.userData = userData;
        });
        cy.fixture('registered-user.json').then(function (registeredUser) {
            this.registeredUser = registeredUser;
        });
        cy.visit('/');

        // Login before checkout
        cy.login(this.registeredUser.email, this.registeredUser.password);

        // Add an item to cart (simplified for this test)
        cy.get('a[href="/products"]').click();
        cy.get('.productinfo').first().find('a[data-product-id]').click();
        cy.get('.modal-footer').contains('Continue Shopping').click();
    });

    it('Completes the checkout process and verifies order success', function () {
        // Navigate to Cart
        cy.get('a[href="/view_cart"]').first().click();
        cy.url().should('include', '/view_cart');
        cy.contains('Shopping Cart').should('be.visible');

        // Proceed to checkout
        cy.get('a[href="/login?checkout"]').contains('Proceed To Checkout').click();

        // Verify delivery address matches user data
        cy.get('.address_delivery').within(() => {
            cy.contains(this.userData.firstName + ' ' + this.userData.lastName).should('be.visible');
            cy.contains(this.userData.address1).should('be.visible');
            cy.contains(this.userData.city).should('be.visible');
        });

        cy.fillPaymentDetails({
            cardName: 'Test User',
            cardNumber: '4111111111111111',
            cvc: '123',
            expiryMonth: '12',
            expiryYear: '2025',
        });

        // Place order
        cy.get('button[data-qa="pay-button"]').click();

        // Verify success message
        cy.contains('Order Placed!').should('be.visible');
        cy.contains('Congratulations! Your order has been placed successfully!').should('be.visible');

        // Continue to homepage
        cy.get('a[data-qa="continue-button"]').click();
        cy.url().should('eq', Cypress.config('baseUrl'));
    });
});