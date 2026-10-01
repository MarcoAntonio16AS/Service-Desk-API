//Handler = Controladores / Manipuladores (Significado)
//Objetvo é que eles saibam controlar e distribuir as funções de acordo com o que são ou não capazes de fazer

function suporteN1(chamado) {
    console.log("N1 Recebeu o chamado");
    if(chamado.prioridade === "normal"){
        console.log("N1 atendeu o chamado");
        return "Suporte N1";
    }

    console.log("N1 não conseguiu resolver");
    console.log("Encaminhando para N2!");
    return suporteN2(chamado);

}

function suporteN2(chamado) {
    console.log("N2 Recebeu o chamado");
    if(chamado.prioridade === "medio"){
        console.log("N2 atendeu o chamado");
        return "Suporte N2";
    }

    console.log("N2 não conseguiu resolver");
    console.log("Encaminhando para Especialista!");
    return especialista(chamado);

}

function especialista(chamado) {
    console.log("ESPECIALISTA Recebeu o chamado");
    if(chamado.prioridade === "alta"){
        console.log("ESPECIALISTA atendeu o chamado");
        return "Suporte ESPECIALISTA";
    }

    throw new Error("Nenhum responsável encontrado!");

}

module.exports = { suporteN1 }
//Para que o services possa assumir então