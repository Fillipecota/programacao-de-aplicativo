import Dono from "./Dono";

export default class Cachorro {
    constructor(nome: string, raca: string, cor: string, tamanho: string, dono: Dono) {
        this.nome = nome;
        this.raca = raca;
        this.cor = cor;
        this.tamanho = tamanho;
        this.dono = dono;
    }

    public nome: string;
    public raca: string;
    public cor: string;
    public tamanho: string;
    public dono: Dono;

    exibirCachorro() {
        console.log(`O cachorro ${this.nome} é da raça ${this.raca} é da cor ${this.cor} é do tamanho ${this.tamanho} `);
    }
    exibirDono() {
        console.log(`O nome do dono é ${this.dono.nome} e seu telefone é ${this.dono.telefone}`)
    }
}