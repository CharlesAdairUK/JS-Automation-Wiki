const axios  = require("axios");
const {TEST_URL} = require("../config/endpoints");

const sendRequest = async (url, data = null, method = "GET") => {
    try{
        const response = await axios({
            method,
            url: `${TEST_URL}/${url}`, 
            headers: {},
            method,
            data
        });
        return {
            data: response.data,
            status: response.status
        };   
    }catch(error){
        return {
            status: error.response.status   
        };
    }
};

module.exports = {
    sendRequest
};