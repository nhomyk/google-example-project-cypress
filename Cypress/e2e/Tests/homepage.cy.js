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
    cy.get('textarea[name="q"]', { timeout: 60000 }).type('QA TEST')
    cy.get('input[value="Google Search"]', { timeout: 60000 }).click()


    // Verify search result
    cy.get('div[data-q="What is QA in testing?"]', { timeout: 60000 }).click()

      
  })


it('Dashboard - Multiple Page Reload  ', () => {
    cy.visit('/')
    cy.wait(500)
    const createObj = new Objects

   
  })