import Banco from "./Banco";
import leia from "readline-sync"

var nubank = new Banco();

var opcao = 0;
do {
    opcao = leia.keyInSelect(["CRIAR CONTA", "TRANSFERENCIA", "REMOVER CONTA", "MOSTRAR CONTA"]) + 1;

    console.log("------------ MENU--------------")

    switch (opcao) {
        case 1:
            nubank.addAccount();
            break
        case 2:
            nubank.trasferir();
            break;
        case 3:
            nubank.removerConta();
            break;
        case 4:
            nubank.mostraContas();
            break;
    }
} while (opcao !== 0);
