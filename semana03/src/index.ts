import ContaBancaria from "./ContaBancaria";
import ContaCorrente from "./ContaCorrente";
import Titular from "./Titular";
import leia from "readline-sync"


var nome = leia.question("Digite nome do usuario: ")
var cpf = leia.question("Digite o cpf: ")
var pix = leia.question("Digite  o numero pix: ")
var sacar = leia.questionFloat("Digite o valor para sacar: ")
var depositar = leia.questionFloat("Digite o valor para depositar: ")

var NovoNumero = leia.questionInt("Digite um novo numero para conta: ")

var d1 = new Titular(nome, cpf)
var c1 = new ContaBancaria(d1, pix);

var cc = new ContaCorrente(d1, pix);

c1.getNumero();
c1.setNumero(NovoNumero);
c1.consultaSaldo();
c1.depositar(depositar);
c1.sacar(sacar);
c1.MostraDadoCota();