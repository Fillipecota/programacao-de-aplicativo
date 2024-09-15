import Veiculo from "./Veiculo";
import leia from "readline-sync";
import carro from "./carro";
import moto from "./moto";

export default class Fecar {
    private NovoVeiculo: Veiculo[] = []

    public adicionarVeiculo(NovoVeiculo: Veiculo) {
        this.NovoVeiculo.push(NovoVeiculo);
    }
    public adicionarNovoVeiculo() {
        console.log("------------Cadastro de veiculos------")
        var marca = leia.question("Digite a marca: ")
        var modelo = leia.question("Digite o modelo: ")
        var ano = leia.questionInt("Digite o ano: ")
        var valor = leia.questionFloat("Digite o valor: ")
        var placa = leia.question("Digite a placa: ")
        var tipo = leia.keyInSelect(["carro", "moto"]) + 1;

        var NovoVeiculo: Veiculo;
        if (tipo === 1) {
            var NumeroDePortas = leia.questionInt("Digite o numero de portas: ")
            NovoVeiculo = new carro(marca, modelo, ano, valor, placa, NumeroDePortas)
            var setDisponivel = true
        } else {
            var cilidradas = leia.questionInt("Digite o valor da cilidradas") 
            NovoVeiculo = new moto(marca, modelo, ano, valor, placa,cilidradas)
        }
        this.adicionarVeiculo(NovoVeiculo)
        console.log(`${NovoVeiculo}  adicionado com sucesso!!`)
    }
    public mostrarVeiculos() {
        console.table(this.NovoVeiculo);
    }
    public removerVeiculos() {
        console.log("-------------deletar veiculo------------")
        var numeroPlaca = leia.question("Digite a placa: ")
        for (var i = 0; i < this.NovoVeiculo.length; i++) {
            if (numeroPlaca === this.NovoVeiculo[i].getPlaca()) {
                this.NovoVeiculo.slice(i, 1)
                return
            }
        }
    }
}
