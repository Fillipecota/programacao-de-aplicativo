export{};

declare global{
    interface Window{
        addPeloEnter: (evento: KeyboardEvent) => void;
        adicionarTarefa: () => void;
        trocaConcluir: () => void;
        deletarTarefa: () => void;
  }
}