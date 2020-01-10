describe('Sapper TailwindCSS Starter app', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  // nav related tests have been moved to nav.js

  it('has the correct <h1>', () => {
    cy.contains('h1', 'Sapper TailwindCSS Starter')
  });

});
