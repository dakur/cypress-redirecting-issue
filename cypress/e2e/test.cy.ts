describe('test', () => {
	specify('test', () => {
		cy.visit('/')
		cy.contains('hello')
	})
});
