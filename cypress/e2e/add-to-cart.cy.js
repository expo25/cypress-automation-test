describe('Add an item to cart', () => {
    beforeEach(() => {
        cy.visit('/');
    });

    it('Verify a user can search for a product and add it to the cart', () => {
        // Navigate to Products page & perform product search
        cy.get('a[href="/products"]').click();
        cy.url().should('include', '/products');
        cy.contains('All Products').should('be.visible');
        cy.get('input#search_product').type('Blue Top');
        cy.get('button#submit_search').click();

        // Verify search results
        cy.contains('Searched Products').should('be.visible');
        cy.get('.productinfo').contains('Blue Top').should('be.visible');
        cy.get('.productinfo').contains('Blue Top').parent().find('a[data-product-id]').click();

        // Handle the "Added!" modal and continue to cart
        cy.get('.modal-content').contains('Added!').should('be.visible');
        cy.get('.modal-footer').contains('Continue Shopping').click();
        cy.get('a[href="/view_cart"]').first().click();
        cy.url().should('include', '/view_cart');

        // Validate the cart contains the correct item.
        cy.get('#product-1').within(() => {
            cy.contains('Blue Top').should('be.visible');
            cy.get('.cart_quantity').should('contain', '1');
        });
    });
});