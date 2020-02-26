export const signUpForm = {
    fillFirstName(name) {
        cy.get('#myinput2').click().type(name)
        return cy.get('.header').click()
    },

    fillLastName(name) {
        cy.get('#myinput3').clear().type(name);
        return cy.get('.header').click()
    },

    fillEmailAdress(email) {
        cy.get('#myinput4').clear().type(email);
        return cy.get('.header').click()
    },

    agreeCheckbox() {
        return cy.get('.checkbox-wrapper.terms').click();
    },

    submitButton() {
        return cy.get('button[type=submit]').click();
    },

    chooseTitle(opt = 2) {
        //1 -> mr; 2 -> mrs; By default -> mrs
        return opt === 1 ? cy.get('#myinput').select('mr') : cy.get('#myinput').select('mrs');
    },
}