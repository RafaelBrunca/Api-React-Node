const roupas = require('./roupaRoute.js');
const cors = require('cors');

module.exports = app => {
    app.use(cors(),roupas)
}