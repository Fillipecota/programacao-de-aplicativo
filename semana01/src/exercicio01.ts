import leia from "readline-sync"

var idades: number[] = [];
var nomes: string[] = [];
var nomeNova: string;
var idadenova: number;

var nomeVelha: string;
var idadeVelha: number;

function pedirInfoUsuario(qtd: number) {
    for (var i = 0; i < qtd; i++) {
        var nome = leia.question("informe o nome: ");
        nomes.push(nome);
        var idade = leia.questionInt("informe a idade: ");
        idades.push(idade);
    }
}

function pessoaMaisNova() {
    for (var i = 0; i < idades.length; i++) {
        if (!idadenova || idades[i] < idadenova) {
            idadenova = idades[i];
            nomeNova = nomes[i];
        }
    }
    console.log("PESSOA MAIS NOVA É: " + nomeNova + " com: " + idadenova)
}
function pessoaMaisvelha() {
    for (var i = 0; i < idades.length; i++) {
        if (!idadeVelha || idades[i] > idadeVelha) {
            idadeVelha = idades[i];
            nomeVelha = nomes[i];
        }
    }

    console.log("PESSOA MAIS VELHA É: " + nomeVelha + " com: " + idadeVelha)
}
pedirInfoUsuario(5);
pessoaMaisNova();
pessoaMaisvelha();


