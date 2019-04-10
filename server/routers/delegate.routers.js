const rating = require('./rating.router');

function delegateRoutes(app) {
    app.use('/api/rating', rating);
    
    app.all('*', (req, res) => {
        res.status(404).send({message: "Cannot access any resources at " + req.originalUrl });
    });    
    
    return app;
}
module.exports = delegateRoutes;