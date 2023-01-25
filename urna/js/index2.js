function inserir(valor) {
    var valorVoto = document.getElementById("campo2").value;
    
    if (valorVoto == "") {
        document.getElementById("campo2").value = valor;
    }

    if(valorVoto == 5){
        document.getElementById("campo2").value = "";
    }

    if(valorVoto == 6){
        document.getElementById("campo2").value = "";
    }
}

function corrige(){
    document.getElementById("campo2").value = "";
}

var candidato1 = 0;
var candidato2 = 0;
var candidato3 = 0;
var candidato4 = 0;
var nulo = 0;
var branco = 0;
var totalVotos = 0;
var porcentagem = 0;

function votar(){
    var valorVoto = parseInt(document.getElementById("campo2").value);
    
    if(valorVoto == 1){
        candidato1 = candidato1 + 1
        alert("O seu voto no candidato Cláuido Castro foi computado")
    }
    if(valorVoto == 2){
        candidato2 = candidato2 + 1
        alert("O seu voto no candidato Marcelo Freixo foi computado")
    }
    if(valorVoto == 3){
        candidato3 = candidato3 + 1
        alert("O seu voto na candidato Rodrigo Neves foi computado ")
    }
    if(valorVoto == 4){
        candidato4 = candidato4 + 1
        alert("O seu voto na candidata Wilson Witsel foi computado")
    }
    if(valorVoto == 5){
        nulo = nulo + 1
        alert("O seu voto anulado foi computado")
    }
    if(valorVoto == 6){
        branco = branco + 1
        alert("O seu voto branco foi computado")
    }
    totalVotos = candidato1 + candidato2 + candidato3 + candidato4 + nulo + branco;
    porcentagem = (nulo+branco) * 100/totalVotos
    document.getElementById("campo2").value = "";
}
 // nulo + branco * 100  / total

function resultado() {
    document.getElementById("c1").innerHTML = candidato1;
    document.getElementById("c2").innerHTML = candidato2;
    document.getElementById("c3").innerHTML = candidato3;
    document.getElementById("c4").innerHTML = candidato4;
    document.getElementById("nulo").innerHTML = nulo;
    document.getElementById("branco").innerHTML = branco;
    document.getElementById("total").innerHTML = totalVotos;
    document.getElementById("percentual").innerHTML = porcentagem + "%";
}
