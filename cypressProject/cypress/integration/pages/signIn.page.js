export const signInPage = {
    visit() {
        return cy.visit('https://betasso.foxstone.ch/en/signin')
    },

    getValidationField(message) {
        return cy.get(`.invalid-popover:contains(${message})`)
    },

    fillEmailAdress(email) {
        cy.get('#input1').clear().type(email);
        return cy.get('#sso-login-form').dblclick()
    },
};