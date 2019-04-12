const axios = require('axios');

const baseURL = '/api/rating';

//pulls quotes from API
function getQuote(){
    return axios
        .get('http://ron-swanson-quotes.herokuapp.com/v2/quotes')
        .then(res => res)
        .catch(err => {throw err});
}

function getRating(ratingId){
    return axios
        .get(`${baseURL}/${ratingId}`)
        .then(res => res)
        .catch(err => {throw err});
}
//Router not working
function getRatingByQuote(body){
    return axios
        .get(`${baseURL}/rating`, body)
        .then(res => res)
        .catch(err => {throw err});
}
//Router not working
function updateRating(quoteId,body){
    return axios
        .get(`${baseURL}/update/${quoteId}`, body)
        .then(res => res)
        .catch(err => {throw err});
}



export {getQuote,getRating,getRatingByQuote,updateRating};