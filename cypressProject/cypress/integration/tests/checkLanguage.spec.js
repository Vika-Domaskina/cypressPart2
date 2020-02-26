import {signUpPage} from "../pages/signUp.page";

describe('Check default language', () => {
    beforeEach(() =>{
        signUpPage.visit();
    });

    it('Check default language', () => {
        signUpPage.getLanguage().should('contain.text', 'Français');
    });
});