import './reset.css';
import './index.css';
import Veiculo from './entity/Veiculo';

var listaVeiculos: Veiculo[] = [];

//ADICIONA OUVINTE DE EVENTO (CLICK) AO BOTAO DE CADASTRAR
document.getElementById("botao-cadastrar")?.addEventListener("click", async (event: MouseEvent) => {
  event.preventDefault();

  var modelo = document.getElementById("modelo") as HTMLInputElement;
  var cor = document.getElementById("cor") as HTMLInputElement;
  var ano = document.getElementById("ano") as HTMLInputElement;
  var preco = document.getElementById("preco") as HTMLInputElement;
  var placa = document.getElementById("placa") as HTMLInputElement;
  var imagem = document.getElementById("imagem") as HTMLInputElement;

  const novoVeiculos = new Veiculo(modelo.value, cor.value, Number(ano.value), Number(preco.value), placa.value, imagem.value);

  listaVeiculos.push(novoVeiculos);

  (window as any).bancoAPI.createVeiculo(novoVeiculos)

  const lista_campos = ["modelo", "cor", "ano", "preco", "placa", "imagem"]
  lista_campos.forEach((campo) => (document.getElementById(campo) as HTMLInputElement).value = "")

  render();
})



window.onload = async () => {
  const veiculos = await (window as any).bancoAPI.findAll();
  for (var i = 0; i < veiculos.length; i++) {
    const veiculo = new Veiculo(
      veiculos[i].modelo,
      veiculos[i].cor,
      veiculos[i].ano,
      veiculos[i].preco,
      veiculos[i].placa,
      veiculos[i].imagem,
      veiculos[i].id
      );
      listaVeiculos.push(veiculo);
    }
    render();
  }
  
  
  function render(){
    
    var aside = document.getElementById("lista_veiculos")
    aside.innerHTML = "";
    
    for (var i = 0; i < listaVeiculos.length; i++) {
      aside.innerHTML +=
      `<div class="card">
      <img src="${listaVeiculos[i].getImagem()}" alt="ERRO">
      <div class="dados">
      <strong>${listaVeiculos[i].getModelo()}</strong>
      <span>Cor: ${listaVeiculos[i].getCor()}</span>
      <span>Ano: ${listaVeiculos[i].getAno()}</span>
      <span>Preço: ${listaVeiculos[i].getPreco()}</span>
      <span>Placa: ${listaVeiculos[i].getPlaca()}</span>
      </div>
      <div class="botao-card">
      <button id="botao-ver" data-id="${listaVeiculos[i].getId}">VER</button>
      <button id="botao-deletar" onclick="deletarVeiculo('${listaVeiculos[i].getId()}')" >DELETAR</button>
      </div>
      </div>`;
      
    }
    
  }
  function deletarVeiculo(id:string){
    //CHAMA A FUNÇAÃO DELETAR, NO CONTEXTO DE 'bancoAPI'
    (window as any).bancoAPI.deletarVeiculo(id);
    //FILTRA TODOS OS ITENS COM ID DIFERENTE DO ID QUE VEIO POR PARAMETRO 
    listaVeiculos = listaVeiculos.filter(Veiculo => Veiculo.getId() !== id);
    //rederizar na tela
   render();

}

function irPaginaDetalhes(id: string){
  (window as any).navigateAPI.irPaginaDetalhes(id);

}
  (window as any).deletarVeiculo = deletarVeiculo;
  (window as any).irPaginaDetalhes = irPaginaDetalhes;
  
  