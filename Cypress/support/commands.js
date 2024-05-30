
// Admin Login
Cypress.Commands.add("QAlogin", () =>{
    cy.visit('/')
    cy.wait(500)
    cy.get('input[id="root_email"]').type('EMAIL',{ delay: 0 })
    cy.get('input[id="root_password"]').type('PASSWORD')
    cy.get('button[type="submit"]').click()
    cy.get('input[id="root_password"]').should("not.exist")
})
// User Login, Limited functionality
Cypress.Commands.add("BBConnectlogin", () =>{
    cy.visit('/')
    cy.wait(500)
    cy.get('input[id="root_email"]').type('EMAIL',{ delay: 0 })
    cy.get('input[id="root_password"]').type('PASSWORD')
    cy.get('button[type="submit"]').click()
    cy.get('input[id="root_password"]').should("not.exist")
})