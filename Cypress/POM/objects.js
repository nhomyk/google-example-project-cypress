class Objects{

    testObjects = {

        // top navigation panel
        leftheaderbutton : () => cy.get('a[class="MV3Tnb"]'),
        rightheaderbutton : () => cy.get('a[class="gb_F"]'),
        GoogleAppsButton : () => cy.get('a[class="gb_d'),

        // footer nav panel
        footerbutton : () => cy.get('a[class="pHiOh'),
        footerSettingsbutton : () => cy.get('div[class="ayzqOc pHiOh'),

        // homepage img
        GoogleLogo : () => cy.get('img[class="lnXdpd'),


        // search field and buttons
        search : () => cy.get('textarea[class="gLFyf"]'),



    } 
}
export default Objects