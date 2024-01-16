import Objects from '/cypress/POM/objects.js'
beforeEach(() => {

  cy.session('login', () => {

    cy.QAlogin()
    cy.wait(500)

  })
});

it('Homepage - Load and input search term  ', () => {
    cy.visit('/')
    cy.wait(500)
    const createObj = new Objects

    // Click dashboard button, verify page load and elements
    cy.get('svg[id="icon-dashboard"]').click()
    cy.get('div[class="icon"]', { timeout: 60000 })
      
  })


it('Dashboard - Multiple Page Reload  ', () => {
    cy.visit('/')
    cy.wait(500)
    const createObj = new Objects

   
  })