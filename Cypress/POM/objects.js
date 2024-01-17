class Objects{

    testObjects = {


        // top navigation panel
        accountHeader : () => cy.get('div[class="header__account--wrapper"]'),
        organizationButton : () => cy.get('div[class="header__text__icon"]'),
        organizationCreateButton : () => cy.get('a[href="/account/organizations/create"]'),
        formMessageError : () => cy.get('p[class="form__message error"]'),
        manageProfileButton : () => cy.get('a[href="/account"]'),
        signOutButton : () => cy.get('a[href="/logout"]'),
        organizationCreateInputOrgName : () => cy.get('input[name="name"]'),
        organizationCreateInputFirstName : () => cy.get('input[name="firstName"]'),
        organizationCreateInputLastName : () => cy.get('input[name="lastName"]'),
        organizationCreateInputEmail : () => cy.get('input[name="email"]'),
        createButton : () => cy.get('button[type="submit"]'),


        addButton : () => cy.get('button[type="submit"]'),

        // OLD ADD BUTTON on TOUCHPOINT build the URL



        notificationText : () => cy.get('div[class="notification"]'),
        toastContainer : () => cy.get('div[class="toast-container"]'),
        notificationDescription : () => cy.get('div[class="description"]'),
        touchpointDeleteNotifcation : () => cy.get('div[class="touchpoint-delete-confirmation-toast"]'),
        touchpointDeleteNotifcationXbutton : () => cy.get('div[class="touchpoint-delete-confirmation-small-button"]'),



    } 
}
export default Objects