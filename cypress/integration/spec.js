describe('Sapper TailwindCSS Starter app', () => {
  // nav related tests have been moved to nav.js

  describe('Home Page', () => {
    beforeEach(() => {
      cy.visit('/')
    });

    it('highlights the Home nav', () => {
      cy.get('.active > a').contains('Home')
    });

    it('has the correct <h1>', () => {
      cy.contains('h1', 'Sapper TailwindCSS Starter')
    });

  });


  describe('About Page', () => {
    beforeEach(() => {
      cy.visit('/about')
    });

    it('highlights the About nav item', () => {
      cy.get('.active > a').contains('About')
    });

    it('has the correct <h1>', () => {
      cy.contains('h1', 'About')
    });

  });


  describe('Blog Page', () => {
    beforeEach(() => {
      cy.visit('/blog')
    });

    it('highlights the Blog nav item', () => {
      cy.get('.active > a').contains('Blog')
    });

    it('has the correct <h1>', () => {
      cy.contains('h1', 'Recent Posts')
    });

  });


  describe('Blog > Sub Page', () => {
    beforeEach(() => {
      cy.visit('/blog/what-is-sapper')
    });

    it('highlights the Blog nav item', () => {
      cy.get('.active > a').contains('Blog')
    });

    it('has the correct <h1>', () => {
      cy.contains('h1', 'What is Sapper?')
    });

  });

});
