// Carne - 400gr por pessoas + de 6hr 650gr
// Cerveja - 1200ml por pessoa + de 6hr 2000ml
// Regrigerante - 1000ml por pessoa + de 6hr 1500ml
// criancas valem por 0,5
// background="/style/1307321594d074a21c9f.png"

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");



function calcular() {
    console.log("Calculando...");

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qtdtotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let qtdtotalCerveja = cervejaPP(duracao) * adultos;
    let qtdtotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);
    
    resultado.innerHTML = `<p>${qtdtotalCarne/1000} kg de Carne</P>`
    resultado.innerHTML += `<p>${Math.ceil(qtdtotalCerveja / 355)} Latas de Cerveja</P>`
    resultado.innerHTML += `<p>${Math.ceil(qtdtotalBebidas / 2000)} Garrafas(2L) de Bebida</P>`
    
}

function carnePP(duracao){
    if(duracao >= 6) {
        return 650;
    } else {
        return 400;
    }
}

function cervejaPP(duracao){
    if(duracao >= 6) {
        return 2000;
    } else {
        return 1200;
    }
}

function bebidasPP(duracao){
    if(duracao >= 6) {
        return 1500;
    } else {
        return 1000;
    }
}