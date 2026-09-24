const tecnicoServices = require('../services/tecnicoServices');
//Ainda que seja a primeira camada da API à qual a solicitação irá passar, é necessário
//que ela chame uma outra camada onde estará meu objeto em questão, sendo isso em Services

function criar(req, res){
    console.log("1 - CONTROLLER recebeu ", req.body);

    const tecnico = tecnicoServices.criar(req.body)

    res.status(201).json(tecnico);
}

module.exports = { criar }