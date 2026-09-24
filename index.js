const chamadoRoutes = require('./routes/chamadoRoutes')
const tecnicoRoutes = require('./routes/tecnicoRoutes')
//Requerendo o que então finalmente criamos dividindo em camadas.

const express = require("express");
const app = express()
const PORT = 3000

app.use(express.json());
//Parciador - Transforma em JSON, permitindo que o backend possa interpretar o documento
//Converte o que está em meu body em um json para que possa ser lido!
//---------------------------------------------------------------------------------------------

//Rotas
app.use('/chamados', chamadoRoutes) //Chamado
app.use('/tecnico', tecnicoRoutes) //Tecnico

app.listen(PORT, function(){
    console.log('Servidor rodando na porta ' + PORT)
})
//O uso da constante PORT permite mudar a porta se necessário, sem mudar nada da estrutura
//Apenas o valor da constante.
//---------------------------------------------------------------------------------------------