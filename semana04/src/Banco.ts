import ContaBancaria from "./ContaBancaria";
import leia from "readline-sync"
import ContaCorrente from "./ContaCorrente";
import Titular from "./Titular";



export default class Banco {
    private contas: ContaBancaria[] = [];

    public trasferir() {
        var numeroOrigem = leia.questionInt("DIGITE O NUMERO DA CONTA: ")
        var numeroDestino = leia.questionFloat("DIGITE O NUMERO DA CONTA DE TRASFERENCIA: ")
        var valorTransferido = leia.questionFloat("INFORME O VALOR QUE DESEJA TRASFERIR: ")



        var indexOrigem = this.contas.findIndex(conta => conta.getNumero() === numeroOrigem);
        if (indexOrigem === -1) {
            console.log("A CONTA DE DESTINO NÃO EXISTE")
            return
        }

        var indexDesino = this.contas.findIndex(conta => conta.getNumero() === numeroDestino);
        if (indexDesino === -1) {
            console.log("A CONTA DE DESTINO NÃO EXISTE")
            return
        }


        this.contas[indexOrigem].sacar(valorTransferido)
        this.contas[indexDesino].depositar(valorTransferido)


        //for (var i = 0; i < this.contas.length; i++) {
        //   if (numeroOrigem === this.contas[i].getNumero()) {
        //        indexOrigem = i;


        // for (var j = 0; j < this.contas.length; j++) {
        //    if (numeroDestino === this.contas[j].getNumero()) {
        //      indexDesino = j;
        //  }
        // }

        // buscar a conta de origem da trasferencia
        // pedir valor da trasferencia
        //verificar se tem saldo
        // buscar conta  de destino da transferencia
        // sacar da conta de origem
        // depositar conta de destino
        //var indexOrigem=this.contas.findIndex(this.conta => this.contas.getNumero()=== numeroOrigem)

    }


    public mostraContas() {
        console.table(this.contas)
    }


    private adicionarConta(conta: ContaBancaria) {
        this.contas.push(conta);

    }

    public addAccount() {

        console.log("--------Cadastrando Conta---------")
        var nome = leia.question("Digite nome do usuario: ")
        var cpf = leia.question("Digite o cpf: ")
        var pix = leia.question("Digite  o numero pix: ")

        var tipoConta = leia.keyInSelect(["corrente", "Poupanca"]) + 1;

        var titular = new Titular(nome, cpf);

        var conta: ContaBancaria;
        if (tipoConta === 1) {
            conta = new ContaCorrente(titular, pix);
        } else {
            conta = new ContaBancaria(titular, pix);
        }
        this.adicionarConta(conta);
        console.log(`Conta ${conta.getNumero()} foi criada com sucesso!`)
    }

    public removerConta() {
        // encontra conta(numero)
        // Removo do array

        console.log("-------------------Deletar Conta--------------")
        var numeroConta = leia.questionInt("Digite o numero da conta para deletar: ")

        //LOGICA DE DELETAR
        for (var i = 0; i < this.contas.length; i++) {
            if (numeroConta === this.contas[i].getNumero()) {
                this.contas.slice(i, 1);
                return
            }
        }
        console.log(`NAO FOI ENCONTRADO NENHUMA CONTA COM O NUMERO ${numeroConta}`)
    }
}







