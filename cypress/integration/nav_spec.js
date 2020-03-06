describe('Nav component', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  context('visual colors (CSS)', () => {
    it('has the correct background color', () => {
      cy.get('nav')
        .should('have.css', 'background-color', 'rgb(74, 85, 104)')
    })

    it('has the correct brand foreground color', () => {
      cy.get('nav .brand a')
        .should('have.css', 'color', 'rgb(226, 232, 240)')
    })

    it('has the correct #nav-content link foreground color', () => {
      cy.get('nav #nav-content a')
        .should('have.css', 'color', 'rgb(255, 255, 255)')
    })
  })

  context('.brand (logo)', () => {
    it('displays logo text and is linked', () => {
      cy.get('nav .brand')
        .should('be.visible')
        .find('a')
        .should('have.attr', 'href', '.')
        .should('contain', 'Sapper TailwindCSS')
    })
  })

  context('#nav-content', () => {

    it('has 3 nav > ul > li nodes', () => {
      cy.get('nav ul > li').should('have.length', 6)
    });

    it('has only 1 > ul > li.active', () => {
      cy.get('nav ul > li.active').should('have.length', 1)
    });

    it('with Home link', () => {
      // cy.get('nav ul>li.active').first().contains('Home')
      cy.get('nav ul>li.active a')
        .should('contain', 'Home')
        .should('have.attr', 'href', '.')
    });

    it('with the About link', () => {
      cy.get('nav ul>li').eq(1).find('a')
        .should('contain', 'About')
        .should('have.attr', 'href', 'about')
    });

    it('with Blog link', () => {
      cy.get('nav ul>li').eq(2).find('a')
        .should('contain', 'Blog')
        .should('have.attr', 'href', 'blog')
    });

  })

  context('iphone XR resolution', () => {
    beforeEach(function () {
      // run these tests as if in a mobile browser
      // and ensure our responsive UI is correct
      cy.viewport('iphone-xr')
    })

    it('displays mobile menu on click', () => {
      cy.get('nav').should('be.visible')
      cy.get('nav #nav-toggle').should('be.visible')
      cy.get('nav #nav-content').should('not.be.visible')
      // cy.get('nav .desktop-menu').should('not.be.visible')
      // cy.get('nav .mobile-menu')
      //   .should('be.visible')
      //   .find('i.hamburger').click()
      //
      // cy.get('ul.slideout-menu').should('be.visible')
    })
  })

  context('sm 640px screen', () => {
    beforeEach(() => {
      // run these tests as if in a mobile browser
      cy.viewport(640, 720)
    })

    it('displays header brand', () => {
      cy.get('nav .brand').should('be.visible')
    })

    it('hides the #nav-contents and shows hamburger button', () => {
      cy.get('nav #nav-content').should('not.be.visible')
      cy.get('nav #nav-toggle').should('be.visible')
    })

    it('toggles #nav-contents when clicking hamburger button', () => {
      cy.get('nav #nav-toggle').click()
      cy.get('nav #nav-content').should('be.visible')
      cy.get('nav #nav-toggle').click()
      cy.get('nav #nav-content').should('not.be.visible')
    })

  }) // sm 640px


  context('md 768px screen', () => {
    beforeEach(() => {
      // run these tests as if in a mobile browser
      cy.viewport(768, 720)
    })

    it('displays header brand', () => {
      cy.get('nav .brand').should('be.visible')
    })

    it('hides the hamburger button and shows the #nav-contents', () => {
      cy.get('nav #nav-content').should('be.visible')
      cy.get('nav #nav-toggle').should('not.be.visible')
    })

    // it('toggles #nav-contents when clicking hamburger button', () => {
    //   cy.get('nav #nav-toggle').click()
    //   cy.get('nav #nav-content').should('be.visible')
    //   cy.get('nav #nav-toggle').click()
    //   cy.get('nav #nav-content').should('not.be.visible')
    // })

  }) // md 768px

  context('> lg 1024px screen', () => {
    beforeEach(function () {
      // runs tests as if a desktop browser with a 720p monitor
      cy.viewport(1026, 720)
    })

    it('displays header brand', () => {
      cy.get('nav .brand').should('be.visible')
    })

    it('displays the #nav-contents', () => {
      cy.get('nav #nav-content').should('be.visible')
    })

    it('hides hamburger button', () => {
      cy.get('nav #nav-toggle').should('not.be.visible')
    })

  }) // > 1024px

  context('> xl 1280px screen', () => {
    beforeEach(function () {
      // runs tests as if a desktop browser with a 720p monitor
      cy.viewport(1280, 720)
    })

    it('displays header brand', () => {
      cy.get('nav .brand').should('be.visible')
    })

    it('displays the #nav-contents & hides hamburger button', () => {
      cy.get('nav #nav-content').should('be.visible')
      cy.get('nav #nav-toggle').should('not.be.visible')
    })
  }) // > xl 1280px

  // it('navigates to /about', () => {
  //   cy.get('nav a').contains('About').click();
  //   cy.url().should('include', '/about');
  // });
  //
  // it('navigates to /blog', () => {
  //   cy.get('nav a').contains('Blog').click();
  //   cy.url().should('include', '/blog');
  // });
});
