import Veiculo from "./Veiculo";
export default class carro extends Veiculo {
    private NumeroDePortas: number
    constructor(marca: string, modelo: string, ano: number, valor: number,placa: string, NumeroDePortas: number) {
        super(marca, modelo, ano, valor,placa)
        this.NumeroDePortas = NumeroDePortas;

    }

    public getNumeroDePortas(): number {
        return this.NumeroDePortas
    }

    public setNumeroDePortas(NumeroDePortas: number):void{
        this.NumeroDePortas = NumeroDePortas
    }
}



