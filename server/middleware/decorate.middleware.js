const cors = require('cors');
const bodyParser = require('body-parser');

function decorate(app) {

    app.use(bodyParser.json())
    app.use(cors());

    return app;
}

module.exports = decorate;