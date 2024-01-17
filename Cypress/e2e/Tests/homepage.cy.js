import Objects from '/cypress/POM/objects.js'
beforeEach(() => {

  cy.session('login', () => {
    cy.wait(500)

  })
});

it('Homepage e2e - Load page, verify elements, input search term and submit  ', () => {
    cy.visit('/')
    cy.wait(500)
    const createObj = new Objects

    // click Stay Signed out, button is in iFrame
    // cy.get('div[aria-label="Stay Signed out"]', { timeout: 60000 }).click()

    // Verify header links
    cy.get('a', { timeout: 60000 }).contains('About')
    cy.get('a', { timeout: 60000 }).contains('Store')
    cy.get('a', { timeout: 60000 }).contains('Gmail')
    cy.get('a', { timeout: 60000 }).contains('Images')
    cy.get('a[aria-label="Google apps"]', { timeout: 60000 })

    // click google apps button, verify apps in dropdown, collapse
    // cy.get('div[class="gb_g"]', { timeout: 60000 }).click()


    // dropdown items are not visible
    // cy.get('span', { timeout: 60000 }).contains('Account')

    // Verify footer links
    cy.get('a', { timeout: 60000 }).contains('Advertising')
    cy.get('a', { timeout: 60000 }).contains('Business')
    cy.get('a', { timeout: 60000 }).contains('How Search works')
    cy.get('a', { timeout: 60000 }).contains('Privacy')
    cy.get('a', { timeout: 60000 }).contains('Terms')
    cy.get('div', { timeout: 60000 }).contains('Settings')


    // Click image upload button, verify dropdown, cancel
    // cy.get('div[aria-label="Search by image"]', { timeout: 60000 }).click()
   // cy.get('span[id="dragText"]', { timeout: 60000 })
    // cy.get('div[id="maskedImage"]', { timeout: 60000 })

    // Type in search term, submit
    cy.get('textarea[name="q"]', { timeout: 60000 }).type('QA TEST')
    cy.get('form').submit()


    // Verify search result
    cy.get('div[data-q="What is QA in testing?"]', { timeout: 60000 }).click()

      
  })


it('Dashboard - Multiple Page Reload  ', () => {
    cy.visit('/')
    cy.wait(500)
    const createObj = new Objects

    cy.reload()

    // Verify header links
    cy.get('a', { timeout: 60000 }).contains('About')
    cy.get('a', { timeout: 60000 }).contains('Store')
    cy.get('a', { timeout: 60000 }).contains('Gmail')
    cy.get('a', { timeout: 60000 }).contains('Images')

    cy.reload()

    // Verify header links
    cy.get('a', { timeout: 60000 }).contains('About')
    cy.get('a', { timeout: 60000 }).contains('Store')
    cy.get('a', { timeout: 60000 }).contains('Gmail')
    cy.get('a', { timeout: 60000 }).contains('Images')

    cy.reload()

    // Verify header links
    cy.get('a', { timeout: 60000 }).contains('About')
    cy.get('a', { timeout: 60000 }).contains('Store')
    cy.get('a', { timeout: 60000 }).contains('Gmail')
    cy.get('a', { timeout: 60000 }).contains('Images')


   
  })