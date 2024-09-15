
export default class Veiculo{
    constructor (marca:string, modelo: string, ano: number, valor: number, placa: string ){

        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.valor = valor
        this.disponivel = false
        this.placa = placa
        
    }

    private marca: string;
    private modelo: string;
    private ano: number;
    private valor: number;
    private disponivel: boolean;
    private placa: string

    public setMarca(marca:string): void{
        this.marca = marca;
    }

    public setModelo(modelo:string): void{
        this.modelo = modelo; 
    }

    public setAno(ano:number): void{
        this.ano = ano;
    }
    public setValor(valor:number): void{
        this.valor = valor;
    }
    public setDisponivel(disponivel:boolean): void{
        this.disponivel;
    }

    public setPlaca(placa:string):void{
        this.placa = placa
    }

    public getPlaca():string {
      return this.placa
    }
    
    mostrarVeiculo(){
        console.log("------------Dados do veiculo----------")
        console.log(`Marca: ${this.marca}`)
        console.log(`modelo: ${this.modelo}`)
        console.log(`ano: ${this.ano}`)
        console.log(`valor ${this.valor}`)
        console.log(`placa: ${this.placa}`)
    

    }

    }


  






      //  detalhesVeiculos(marca:number):void{

        //}
    
      //  registroTrasacao(): void{
            
       // }
    


    

