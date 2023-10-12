const { sendRequest } = require('../helpers/api.helper');
const testData = require('../config/data.json');

describe('API Test Suite', () => {
    it('GET post/1', async () => {
        const response = await sendRequest('posts/1');
        expect(response.data.userId).to.equal(1);
        expect(response.status).to.equal(200);
    });

    it('POST posts', async () => {
        const response = await sendRequest('posts', testData, 'POST');
        expect(response.status).to.equal(201);
    });

    it('PUT posts/1', async () => {
        const response = await sendRequest('posts/1', testData, 'PUT');
        expect(response.status).to.equal(200);
    });

    it('DELETE posts/1', async () => {
        const response = await sendRequest('posts/0', null, 'DELETE');
        expect(response.status).to.equal(200);
    })

    it('GET non-existing post', async () => {
        const response = await sendRequest('posts/0');
        expect(response.status).to.equal(404);
    });

    it('POST with invalid data', async () => {
        const invalidData = {
            1:1
        };
        const response = await sendRequest(invalidData, 'POST');
        expect(response.status).to.equal(404);
    });

    it('PUT non-existing post', async () => {
        const response = await sendRequest('posts/-0', testData, 'PUT');
        expect(response.status).to.equal(500);
    });

    it('DELETE non-existing post', async () => {
        const response = await sendRequest('2', null, 'DELETE');
        expect(response.status).to.equal(404);
    });

});