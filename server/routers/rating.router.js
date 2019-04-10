const express = require('express');
const getDb = require('../database/bootstrap.database');

const ratingRouter = express.Router();

//gets rating 
ratingRouter.get('/:quoteId', (req,res) => {
    const quote_id = req.params.ratingId;
    const db = getDb();
    db.get_rating( [quote_id] )
        .then( rating => res.status(200).send(rating))
        .catch( err => res.status(500).send(err))
});

//updates rating
exerciseRouter.put('update/:quoteId', (req, res) => {
    const quote_id = req.params.quoteId;
    const db = getDb();
    const { rating } = req.body;
    db.update_rating([ quote_id, rating ])
        .then( (promise) => res.status(200).send(promise) )
        .catch( err => res.status(500).send(err) )
});

module.exports = ratingRouter;