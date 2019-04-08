const axios = require('axios');

function getQuote(){
    return axios
        .get('http://ron-swanson-quotes.herokuapp.com/v2/quotes')
        .then(res => res)
        .catch(err => {throw err});
}

export {getQuote};