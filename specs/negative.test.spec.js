const { sendRequest } = require('../helpers/api.helper');
const testData = require('../config/data.json');

describe('API Test Suite to test the negative outcomes of POST/PUT/DELETE/GET', () => {
    it('GET - Testing the the retrieval of data from the posts folder that does not exist', async () => {
        const response = await sendRequest('posts/0');
        expect(response.status).to.equal(404);
    });

    it('POST - Testing the creation of a post with invalid data', async () => {
        const invalidData = {
            1:1
        };
        const response = await sendRequest(invalidData, 'POST');
        expect(response.status).to.equal(404);
    });

    it('PUT - Testing an edit of a post that does not exist', async () => {
        const response = await sendRequest('posts/-0', testData, 'PUT');
        expect(response.status).to.equal(500);
    });

    it('DELETE - Testing the deletion of a post that does not exist', async () => {
        const response = await sendRequest('2', null, 'DELETE');
        expect(response.status).to.equal(404);
    });

});