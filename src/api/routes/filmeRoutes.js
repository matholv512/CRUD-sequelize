const express = require('express');
const router = express.Router();

const filmeControllers = require('../controllers/filmeControlerrs');

router.get('/filme', filmeControllers.index);

router.post('/filme', filmeControllers.store);

router.put('/filme/:codigo', filmeControllers.update);

router.delete('/filme/:codigo', filmeControllers.delete);

module.exports = router;