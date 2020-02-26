import { MailSlurp } from "mailslurp-client"
const api = new MailSlurp({ apiKey:"42d9bf701d8b3c1e9b9b8b2f0e23a65390a694b6a833e1999a9b87bafaf05104"});
const validTestData = require('../../fixtures/validTestData.json');

describe('Check sended email and content', () => {
    it('Check that verification email was sended', async() => {
        const email = await api.getAllEmails();
        expect(email.content[0].subject).to.equal('Verify your email address');
        expect(email.content[0].id).to.equal('12bc85ec-a3e8-4f5e-a0ac-5da7ff778807');
        expect(email.content[0].to[0]).to.equal(validTestData.validCredentials.email);
    })
});