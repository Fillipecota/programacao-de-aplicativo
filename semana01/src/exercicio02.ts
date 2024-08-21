import leia from "readline-sync"
import { Celular, cadastraCelular } from "./reoisitory/CelularRepository"
import { Pessoa } from "./reoisitory/PessoaRepository"

var cor = leia.question("INFORME A COR DO CELULAR: ")
var marca = leia.question("INFORME A MARCA : ")
var tamanho = leia.questionFloat("INFORME O TAMANHO DA TELA: ")

const celular: Celular = {
    cor: cor,
    marca: marca,
    tamanhoTela: tamanho

}

var nome = leia.question("DIGITE O NOME: ");
var cpf = leia.question("DIGITE O CPG: ");
var dtNascimento = leia.question("DIGITE DATA DE NASCIMENTO: ");
var telefone = leia.question("DIGITE TELEFONE: ");
var email = leia.question("DIGITE UM EMAIL:  ");

const pessoa: Pessoa = {
    nome: nome,
    cpf: cpf,
    dataNascimento: dtNascimento,
    contatos: {
        telefones: [telefone],
        emails: [email]
    },
    celular: celular
}
console.table(celular)
console.log(pessoa)
