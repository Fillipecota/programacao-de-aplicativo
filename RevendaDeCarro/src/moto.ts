import Veiculo from "./Veiculo";
export default class moto extends Veiculo {
    private cilidradas: Number
    constructor(marca: string, modelo: string, ano: number, valor: number, placa: string, cilidradas: number) {
        super(marca, modelo, ano, valor, placa)
        this.cilidradas = cilidradas;
    }

    public setCilidradas(cilidradas: number): void {
        this.cilidradas = cilidradas;
    }
    //public getCilidradas(): number{
    //    return this.cilidradas;
    //}

}
