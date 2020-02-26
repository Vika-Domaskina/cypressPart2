import { signUpPage} from '../pages/signUp.page';
import {helper} from "../pages/hepler.page";
import {signUpForm} from "../pages/signUpForm.page";
const validTestData = require('../../fixtures/validTestData.json');

describe('Sig up steps [positive/negative]' , () => {

    beforeEach(() => {
        signUpPage.visit();
    });

    it('Sig up with valid data', () => {
        signUpForm.chooseTitle();
        signUpForm.fillFirstName('first' + helper.randomString(8));
        signUpForm.fillLastName('last' + helper.randomString(8));
        signUpForm.fillEmailAdress('email' + helper.randomString(8) + '@test.com');
        signUpForm.agreeCheckbox(true);
        signUpForm.submitButton();
        cy.url().should('include', 'en/swiss-citizen')
    });

    it('Sig up with  not valid first name', () => {
        signUpForm.chooseTitle();
        signUpForm.fillFirstName('v');
        signUpForm.fillLastName(validTestData.validCredentials.lastName);
        signUpForm.fillEmailAdress(validTestData.validCredentials.email);
        signUpForm.agreeCheckbox(true);
        // signUpForm.submitButton();
        signUpPage.getValidationField(validTestData.errorMessages.errorShortFirstName).should('be.visible')
    });

    it('Sig up with existing user', () => {
        signUpForm.chooseTitle();
        signUpForm.fillFirstName(validTestData.validCredentials.firstName);
        signUpForm.fillLastName(validTestData.validCredentials.lastName);
        signUpForm.fillEmailAdress(validTestData.validCredentials.email);
        signUpForm.agreeCheckbox(true);
        signUpForm.submitButton();
        cy.get('.notification.notification-danger.ng-star-inserted').should('contain', validTestData.errorMessages.alreadyExistUser)
    });

    afterEach(() => {
        cy.reload();
    });

});
