function criar(dados){
    console.log("2 - SERVICES recebeu, ", dados);

    //Criando a variável "tecnico" -> Guardando um objeto!
    const tecnico = {
        id: 1,
        titulo: dados.titulo,
        nome: dados.nome,
        funcao: dados.funcao
    }

    console.log("3 - SERVICES criou, ", dados)
    return tecnico

    //Aqui onde minha regra de negócios roda.
}

module.exports = { criar };