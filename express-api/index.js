const express = require('express');
const cors = require('cors');
const routes = require('./routes/routes.js')

const app = express();
const port = 3050;

routes(app);

app.use(cors());

app.listen(port, () => console.log(`O servidor está rodando em: http://localhost:${port}`));

module.exports = app;