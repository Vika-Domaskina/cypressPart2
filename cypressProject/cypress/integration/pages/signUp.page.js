export const signUpPage = {
    visit() {
        return cy.visit('https://betasso.foxstone.ch/en/signup')
    },

    getValidationField(message) {
        return cy.get(`.invalid-popover:contains(${message})` );
    },

    getLanguage() {
        return cy.get('.languages')
    }
}

