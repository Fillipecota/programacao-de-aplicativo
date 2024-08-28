import Titular from "./Titular";

export default class ContaBancaria {
    constructor(titular: Titular, chavePix: string) {

        this.titular = titular;
        this.chavePix = chavePix;
        this.dataCriacao = new Date();
        this.saldo = 0
        this.numero = String(Math.floor(Math.random() * 89999) + 10000);
    }

    numero!: string;
    saldo!: number;
    titular: Titular;
    chavePix: string;
    dataCriacao: Date;

    depositar(valor: number) {
        if (valor <= 0) {
            console.log("Valor do depositp é invalido!!")

        } else {
            this.saldo = this.saldo + valor;
            console.log(`Deposito de ${valor} realizado com sucesso. O saldo atual é ${this.saldo}`)
        }
    }
    sacar(valor: number) {
        if (valor <= this.saldo && valor >= 0) {
            this.saldo = this.saldo - valor
            console.log(` Sacado ${valor}`)
            console.log(` Seu saldo atual é ${this.saldo}`)
        } else {
            console.log('Nao a saldo')

        }
    }

    consultaSaldo() {
        console.log(`Seu saldo é de R$${this.saldo}`)
    }
    MostraDadoCota() {
        console.log("--------------Dado-Da-Conta--------------")
        console.log(`Nome titulo: ${this.titular.nome}`);
        console.log(`CPF titular: ${this.titular.cpf}`);
        console.log(`chave PIX: ${this.chavePix}`);
        console.log(`numero da conta: ${this.numero}`);
        console.log(`data crianão> ${this.dataCriacao}`);
        console.log(`soldo atual: ${this.saldo}`);

    }
}