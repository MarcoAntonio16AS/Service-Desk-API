const express = require('express');
//Importar novamente pois há funções que podem ser utilizadas como o próprio Router que é do Express
const chamadoController = require('../controllers/chamadoController')
const router = express.Router();

router.post('/', chamadoController.criar);
//Iremos criar um comando criar no Controller

module.exports = router;