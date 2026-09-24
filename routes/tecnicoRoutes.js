const express = require('express')
const tecnicoController = require('../controllers/tecnicoController');
const router = express.Router();

router.post('/', tecnicoController.criar);
//Isso vai criar um comando "criar" dentro do Controller

module.exports = router;