import { signUpPage} from '../pages/signUp.page';
import { signUpForm} from '../pages/signUpForm.page';
import {helper} from "../pages/hepler.page";
const validTestData = require('../../fixtures/validTestData.json');

describe('Check error messages for sign up form', () => {

    describe('Check error messages for first name' , () => {

        before(() =>{
            signUpPage.visit();
        });

        it('Enter in first name field one symbol and check error message', () => {
            signUpForm.fillFirstName('T');
            signUpPage.getValidationField(validTestData.errorMessages.errorShortFirstName).should('be.visible')
        });

        afterEach(() => {
            cy.reload();
        });

    });

    describe('Check error messages for last name' , () => {
        before(() =>{
            signUpPage.visit();
        });


        it('Enter in last name field one symbol and check error message', () => {
            signUpForm.fillLastName('T');
            signUpPage.getValidationField(validTestData.errorMessages.errorShortLastName).should('be.visible')
        });

        afterEach(() => {
            cy.reload();
        });

    });

    describe('Check error messages for email' , () => {

        before(() =>{
            signUpPage.visit();
        });

        it('Enter in email field one symbol and check error message', () => {
            signUpForm.fillEmailAdress('t');
            signUpPage.getValidationField(validTestData.errorMessages.wrongEmail).should('be.visible')
        });

        it('Enter email without ad and check error message', () => {
            signUpForm.fillEmailAdress('test.com');
            signUpPage.getValidationField(validTestData.errorMessages.wrongEmail).should('be.visible')
        });

        it('Enter email without word after ad and check error message', () => {
            signUpForm.fillEmailAdress('test@');
            signUpPage.getValidationField(validTestData.errorMessages.wrongEmail).should('be.visible')
        });

        it('Enter email email too long and check error message', () => {
            signUpForm.fillEmailAdress('test@' + helper.randomString(100));
            signUpPage.getValidationField(validTestData.errorMessages.wrongEmail).should('be.visible')
        });

        afterEach(() => {
            cy.reload();
        });

    });

});