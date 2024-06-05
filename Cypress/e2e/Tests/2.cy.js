import Objects from '/cypress/POM/objects.js'

it('Homepage - Assert load', () => {
  cy.request({
  url: 'http://google.com',
}).then((resp) => {
  // status code is 200
  expect(resp.status).to.eq(200)
})
})

it('Assert 200', () => {
	cy.request({
	url: 'http://google.com',
}).then((response) => {
	expect(response.status).to.eq(200)		

})
})

it('Homepage - verify page load', () => {
	cy.visit('/')
	const createObj = new Objects

	// verify buttons
	
	createObj.testObjects.leftheaderbutton()
})	
