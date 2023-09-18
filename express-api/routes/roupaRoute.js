const { Router } = require('express');
const express = require('express');
const router = Router();
const roupas = require('../controllers/runAPI.js');
const cors = require('cors')

const app = express()

//Cors é responsavel por gerenciar/integrar aplicações
app.use(cors())

router
    .get('/roupas', async(req, res) => {
        const token = req.headers.authorization
        res.status(200).json(await roupas.runAPI(token))
    })

module.exports = router;