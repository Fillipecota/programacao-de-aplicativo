/**
 * This file will automatically be loaded by vite and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/tutorial/application-architecture#main-and-renderer-processes
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.ts` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */

// console.log('👋 This message is being logged by "renderer.ts", included via Vite');

import './reset.css';
import './index.css';
import Swal from 'sweetalert2'
import Tarefa from './Tarefa';



var tarefas: Tarefa[] = [];

export function addPeloEnter(evento: KeyboardEvent) {
    if (evento.key === 'Enter') {
        adicionarTarefa();
    }
}



function adicionarTarefa() {
    const input = document.getElementById("tarefa-text") as HTMLInputElement;
    const tarefaTexto = input.value.trim();

    if (tarefaTexto === '') {
        Swal.fire("VOCÊ TENTOU ADICIONAR UMA TAREFA SEM TEXTO");
        return;
    }

    const novaTarefa = new Tarefa(tarefaTexto);
    tarefas.push(novaTarefa);
    console.log(tarefas)

    localStorage.setItem("tarefas", JSON.stringify(tarefas))
    render()
    input.value = "";
    input.focus();
}

function render() {
    const listaTarefas = document.getElementById("lista-tarefa") as HTMLUListElement;
    listaTarefas.innerHTML = "";

    for (var i = 0; i < tarefas.length; i++) {
        const li = document.createElement("li");
        if (tarefas[i].getCompleted() === true) {
            li.classList.add("completed");
        }

        const span = document.createElement("span");
        span.textContent = tarefas[i].getText();

        const concluir = document.createElement("button");
        concluir.textContent = tarefas[i].getCompleted() ? "Desmarcar" : "Concluir";
        concluir.classList.add("check");
        concluir.setAttribute("onclick", `trocaConcluir(${tarefas[i].getId()})`)

        const edit = document.createElement("button");
        edit.textContent = "Editar";
        edit.classList.add("edit");
        edit.setAttribute("onclick", `editarTarefa(${tarefas[i].getId()})`)

        const deletar = document.createElement("button");
        deletar.textContent = "Deletar";
        deletar.classList.add("delete");
        deletar.setAttribute("onclick", `deletarTarefa(${tarefas[i].getId()})`)

        const div = document.createElement("div");

        div.appendChild(concluir)
        div.appendChild(edit)
        div.appendChild(deletar)

        li.appendChild(span);
        li.appendChild(div);

        listaTarefas.appendChild(li);
    }
}
function trocaConcluir(id: number) {
    const index = tarefas.findIndex(tarefa => tarefa.getId() === id);
    const valorAtual = tarefas[index].getCompleted();
    tarefas[index].setCompleted(!valorAtual);
    localStorage.setItem("tarefas", JSON.stringify(tarefas))
    render();
}
async function editarTarefa(id: number) {
    const index = tarefas.findIndex(tarefa => tarefa.getId() === id);

    const { value } = await Swal.fire({
        title: "Editar tarefa!",
        input: "text",
        inputLabel: "Edite o texto da tarefa",
        inputValue: tarefas[index].getText(),
        showCancelButton: false,
        confirmButtonText: 'salvar',
        icon: 'success'
    });

    if (value !== null && value.trim() !== "") {
        tarefas[index].setText(value);
        localStorage.setItem("tarefas", JSON.stringify(tarefas))
        render();
    }
}

function deletarTarefa(id: number) {
    const index = tarefas.findIndex(tarefa => tarefa.getId() === id);
    tarefas.splice(index, 1);
    localStorage.setItem("tarefas", JSON.stringify(tarefas))
    render();
}
//     const tarefaFiltradas = tarefas.filter(tarefa => tarefa.getId() !== id);
//     tarefas = tarefaFiltradas;
//     localStorage.setItem("tarefas", JSON.stringify(tarefas))
//     render();
// 





window.addPeloEnter = addPeloEnter;
window.adicionarTarefa = adicionarTarefa;
window.trocaConcluir = trocaConcluir;
window.deletarTarefa = deletarTarefa;
window.editarTarefa = editarTarefa;

// (window as any).addPeloEnter = addPeloEnter; const novaTextoTarefa = prompt(`editar a tarefa`,tarefas[index].getText());

