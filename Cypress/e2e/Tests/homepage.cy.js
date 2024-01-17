import Objects from '/cypress/POM/objects.js'
beforeEach(() => {

  cy.session('login', () => {
    cy.wait(500)

  })
});

it('Homepage e2e - Load page, verify elements', () => {
    cy.visit('/')
    const createObj = new Objects

    // click Stay Signed out, button is in iFrame
    // cy.get('div[aria-label="Stay Signed out"]', { timeout: 60000 }).click()

    // Verify header links and
    cy.get('a[class="MV3Tnb"]', { timeout: 60000 }).contains('About')
    cy.get('a[class="MV3Tnb"]', { timeout: 60000 }).contains('Store')
    cy.get('a[class="gb_F"]', { timeout: 60000 }).contains('Gmail')
    cy.get('a[class="gb_F', { timeout: 60000 }).contains('Images')
    cy.get('a[class="gb_d', { timeout: 60000 })
    cy.get('img[alt="Google', { timeout: 60000 })

    // Verify page buttons 
    cy.get('input[value="Google Search', { timeout: 60000 })
    cy.get('input', { timeout: 60000 }).contains('Feeling Lucky')

    // Verify footer links
    cy.get('a[class="pHiOh', { timeout: 60000 }).contains('Advertising')
    cy.get('a[class="pHiOh', { timeout: 60000 }).contains('Business')
    cy.get('a[class="pHiOh', { timeout: 60000 }).contains('How Search works')
    cy.get('a[class="pHiOh', { timeout: 60000 }).contains('Privacy')
    cy.get('a[class="pHiOh', { timeout: 60000 }).contains('Terms')
    cy.get('div[class="ayzqOc pHiOh', { timeout: 60000 }).contains('Settings')


    // Click image upload button, verify dropdown, cancel
    // cy.get('div[aria-label="Search by image"]', { timeout: 60000 }).click()
   // cy.get('span[id="dragText"]', { timeout: 60000 })
    // cy.get('div[id="maskedImage"]', { timeout: 60000 })

      
  })

it('Homepage - Search - Verify single search and result ', () => {
    cy.visit('/')
    const createObj = new Objects

    // Type in search term, submit
    cy.get('textarea[class="gLFyf"]', { timeout: 60000 }).type('QA TEST')
    cy.get('form').submit()


    // Verify search result
    cy.get('div[data-q="What is QA in testing?"]', { timeout: 60000 }).click()
   
  })


it('Homepage - Multiple Page Reload  ', () => {
    cy.visit('/')
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