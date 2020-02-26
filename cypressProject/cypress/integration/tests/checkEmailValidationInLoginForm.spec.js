import {signInPage} from "../pages/signIn.page";
import {helper} from "../pages/hepler.page";

const validTestData = require('../../fixtures/validTestData.json');
describe('Visit the site and check email validation in login form', function () {
    before(() => {
        signInPage.visit();

    });

    it('type email in not support language', function () {
        signInPage.fillEmailAdress('тест');
        signInPage.getValidationField(validTestData.errorMessages.wrongEmail).should('be.visible');
    });

    it('type email without ad', function () {
        signInPage.fillEmailAdress('test.test');
        signInPage.getValidationField(validTestData.errorMessages.wrongEmail).should('be.visible');
    });

    it('type email without word before ad', function () {
        signInPage.fillEmailAdress('@test');
        signInPage.getValidationField(validTestData.errorMessages.wrongEmail).should('be.visible');
    });

    it('type email without word after ad', function () {

        signInPage.fillEmailAdress('test@');
        signInPage.getValidationField(validTestData.errorMessages.wrongEmail).should('be.visible');
    });

    it('type email too long', function () {
        signInPage.fillEmailAdress('test' + helper.randomString(50));
        signInPage.getValidationField(validTestData.errorMessages.wrongEmail).should('be.visible');
    });

    afterEach(() => {
        cy.reload();
    })
});