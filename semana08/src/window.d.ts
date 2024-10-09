export{};

declare global{
    interface Window{
        addPeloEnter: (evento: KeyboardEvent) => void;
        adicionarTarefa: () => void;
        trocaConcluir: (id: number) => void;
        deletarTarefa: (id: number) => void;
        editarTarefa: (id: number) => void;
  }
}