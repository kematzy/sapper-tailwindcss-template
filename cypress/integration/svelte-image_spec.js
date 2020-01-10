describe('Svelte Image component', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('has the correct svelte-image tag', () => {
    cy.get('div.wrapper > div.loaded > div').should('have.attr', 'alt', 'Autumn landscape in Yosemite National Park, USA')
  });

  // it('has the correct <img> alt tag', () => {
  //   cy.get('img').should('have.attr', 'alt', 'Autumn landscape in Yosemite National Park, USA')
  // });
  //
  // it('has the correct <img> src tag with base64 encoded image ', () => {
  //   cy.get('img').should('have.attr', 'src').and('match', /data:image\/png;base64/)
  // });


  context('iphone XR resolution', () => {
    beforeEach(function () {
      // run these tests as if in a mobile browser
      cy.viewport('iphone-xr')
    })

  })

  context('sm 640px screen', () => {
    beforeEach(() => {
      // run these tests as if in a mobile browser
      cy.viewport(640, 720)
    })

  }) // sm 640px

  context('md 768px screen', () => {
    beforeEach(() => {
      // run these tests as if in a mobile browser
      cy.viewport(768, 720)
    })

  }) // md 768px

  context('> lg 1024px screen', () => {
    beforeEach(function () {
      // runs tests as if a desktop browser with a 720p monitor
      cy.viewport(1026, 720)
    })

  }) // > 1024px

  context('> xl 1280px screen', () => {
    beforeEach(function () {
      // runs tests as if a desktop browser with a 720p monitor
      cy.viewport(1280, 720)
    })

  }) // > xl 1280px

});
