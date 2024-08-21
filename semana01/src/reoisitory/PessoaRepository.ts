import { Celular, cadastraCelular } from "./CelularRepository";

export type Pessoa = {
    nome: string;
    cpf: string;
    dataNascimento: string;
    contatos: {
        telefones: string[];
        emails: string[];
    }
    celular: Celular
}

function cadastraPessoas(parametros: Pessoa) {
    //Cadatras pessoas//
    cadastraCelular(parametros.celular)

}
