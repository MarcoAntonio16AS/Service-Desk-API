const chamadoService = require('../services/chamadoServices');
//1 ponto (./) quer dizer que é para procurar o arquivo na camada onde este arquivo está
//2 pontos (../) quer dizer que é para sair do diretório atual e ir para 1 camada acima

function criar(req, res){
    try {
        console.log("1 - CONTROLLER recebeu", req.body);
        const chamado = chamadoService.criar(req.body)
        res.status(201).json(chamado);
    } catch(error){
        res.status(404).json(error.message)
    }
    
}

module.exports = { criar }