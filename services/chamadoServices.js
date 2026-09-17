function criar(dados){
    console.log("2 - SERVICE recebeu ", dados);
    
    //Criando uma variável "chamado" -> Guardando um objeto!
    const chamado = {
        id: 1,
        titulo: dados.titulo,
        status: "aberto"
    }
    console.log("3 - SERVICE criou ", chamado)
    return chamado
}

//Como vou exportar para outras camadas/folders é necessário criar um comando para isso
module.exports = { criar };