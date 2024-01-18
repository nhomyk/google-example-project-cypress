import Objects from '/cypress/POM/objects.js'
beforeEach(() => {

  cy.session('login', () => {

  })
});

it('Homepage - Load page, verify elements', () => {
    cy.visit('/')
    const createObj = new Objects

    // Verify header links
    createObj.testObjects.leftheaderbutton().contains('About')
    createObj.testObjects.leftheaderbutton().contains('Store')
    createObj.testObjects.rightheaderbutton().contains('Gmail')
    createObj.testObjects.rightheaderbutton().contains('Images')
    createObj.testObjects.GoogleAppsButton()
    createObj.testObjects.GoogleLogo()

    // Verify page buttons 
    cy.get('input[value="Google Search', { timeout: 60000 })
    cy.get('input', { timeout: 60000 }).contains('Feeling Lucky')

    // Verify footer links

    createObj.testObjects.footerbutton().contains('Advertising')
    createObj.testObjects.footerbutton().contains('Business')
    createObj.testObjects.footerbutton().contains('How Search works')
    createObj.testObjects.footerbutton().contains('Privacy')
    createObj.testObjects.footerbutton().contains('Terms')
    createObj.testObjects.footerSettingsbutton().contains('Settings')



    // Click image upload button, verify dropdown, cancel
    // cy.get('div[aria-label="Search by image"]', { timeout: 60000 }).click()
   // cy.get('span[id="dragText"]', { timeout: 60000 })
    // cy.get('div[id="maskedImage"]', { timeout: 60000 })

      
  })

it('Homepage - Search - Verify single search and result ', () => {
    cy.visit('/')
    const createObj = new Objects

    // Type in search term, submit
    createObj.testObjects.search().type('QA TEST')
    cy.get('form').submit()


    // Verify search result
    cy.get('div[data-q="What is QA in testing?"]', { timeout: 60000 }).click()
   
  })


it('Homepage - Multiple Page Reload  ', () => {
    cy.visit('/')
    const createObj = new Objects

    cy.reload()

    // Verify header links
    createObj.testObjects.leftheaderbutton().contains('About')
    createObj.testObjects.leftheaderbutton().contains('Store')
    createObj.testObjects.rightheaderbutton().contains('Gmail')
    createObj.testObjects.rightheaderbutton().contains('Images')

    cy.reload()

    createObj.testObjects.leftheaderbutton().contains('About')
    createObj.testObjects.leftheaderbutton().contains('Store')
    createObj.testObjects.rightheaderbutton().contains('Gmail')
    createObj.testObjects.rightheaderbutton().contains('Images')

    cy.reload()

    createObj.testObjects.leftheaderbutton().contains('About')
    createObj.testObjects.leftheaderbutton().contains('Store')
    createObj.testObjects.rightheaderbutton().contains('Gmail')
    createObj.testObjects.rightheaderbutton().contains('Images')


   
  })