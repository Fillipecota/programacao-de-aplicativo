import Fecar from "./Fecar";
import Veiculo from "./Veiculo";
import leia from "readline-sync"

var Fehcar = new Fecar();

var opcao = 0;
do {
    opcao = leia.keyInSelect(["ADC VEICULO", "REMOVER VEICULO", "MOSTRAR VEICULO"]) + 1;

    console.log("------------ MENU--------------")

    switch (opcao) {
        case 1:
            Fehcar.adicionarNovoVeiculo();
            break
        case 2:
            Fehcar.removerVeiculos();
            break;
        case 4:
            Fehcar.mostrarVeiculos();
            break;
    }
} while (opcao !== 0);
