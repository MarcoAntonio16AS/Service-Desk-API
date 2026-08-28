const express = require("express");
const app = express()

app.use(express.json());
//Parciador - Transforma em JSON, permitindo que o backend possa interpretar o documento
//Converte o que está em meu body em um json para que possa ser lido!

app.get('/', function(req, res){
    res.send('Rota raiz')
})

app.post('/chamados', function(req, res){
    const titulo = req.body.titulo;
    res.json({"titulo do chamado":titulo})
})

app.listen(3000, function(){
    console.log('Servidor rodando na porta 3000')
})