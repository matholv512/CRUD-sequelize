const express = require('express');
const router = express.Router();

const elencoControllers = require('../controllers/elencoControlerrs.js');

router.get('/elenco', elencoControllers.index);

router.post('/elenco', elencoControllers.store);

router.put('/elenco/:codigo', elencoControllers.update);

router.delete('/elenco/:codigo', elencoControllers.delete);

module.exports = router;