import ContaBancaria from "./ContaBancaria";
import Titular from "./Titular";
import leia from "readline-sync"

var opcao = leia.keyInSelect(["cadastra", "sacar", "depositar", "consultaSaldo"]);

switch (opcao) {

    case 1:

        break
    case 2:

        break
    case 3:

        break
    case 4:

    default:
        console.log
        break
}


var nome = leia.question("Digite nome do usuario: ")
var cpf = leia.question("Digite o cpf: ")
var pix = leia.question("Digite  o numero pix: ")
var sacar = leia.questionFloat("Digite o valor para sacar: ")
var depositar = leia.questionFloat("Digite o valor para depositar: ")
var d1 = new Titular(nome, cpf)
var c1 = new ContaBancaria(d1, pix);

c1.consultaSaldo();
c1.depositar(depositar);
c1.sacar(sacar);
c1.MostraDadoCota();