const { sendRequest } = require('../helpers/api.helper');
const testData = require('../config/data.json');

describe('API Test Suite to test the positive outcomes of POST/PUT/DELETE/GET', () => {
    it('GET - Retrieve post information from the first entry of the posts folder', async () => {
        const response = await sendRequest('posts/1');
        expect(response.data.userId).to.equal(1);
        expect(response.status).to.equal(200);
    });

    it('POST - Create new post in the posts folder', async () => {
        const response = await sendRequest('posts', testData, 'POST');
        expect(response.status).to.equal(201);
    });

    it('PUT - Edit the first entry of the post folder using test data', async () => {
        const response = await sendRequest('posts/1', testData, 'PUT');
        expect(response.status).to.equal(200);
    });

    it('DELETE - Delete the first entry of the posts folder', async () => {
        const response = await sendRequest('posts/0', null, 'DELETE');
        expect(response.status).to.equal(200);
    })
});