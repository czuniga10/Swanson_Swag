const express = require('express');
const getDb = require('../database/bootstrap.database');

const ratingRouter = express.Router();

//gets rating 
ratingRouter.get('/:quoteId', (req,res) => {
    const quote_id = req.params.quoteId;
    const db = getDb();
    db.get_rating( [quote_id] )
        .then( rating => res.status(200).send(rating))
        .catch( err => res.status(500).send(err))
});

//gets current rating based on quote text
//NOT WORKING YET
ratingRouter.get('/rating', (req,res) => {
    const {quote} = req.body;
    const db = getDb();
    db.get_rating_by_quote( [quote] )
        .then( rating => res.status(200).send(rating))
        .catch( err => res.status(500).send(err))
});

//updates new rating to DB
//NOT WORKING YET
ratingRouter.put('/update/:quoteId', (req, res) => {
    const quote_id = req.params.quoteId;
    const db = getDb();
    const { rating } = req.body;
    db.update_rating([ quote_id, rating ])
        .then( (promise) => res.status(200).send(promise) )
        .catch( err => res.status(500).send(err) )
});

module.exports = ratingRouter;