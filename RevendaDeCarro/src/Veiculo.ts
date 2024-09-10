
export default class Veiculo{
    constructor (marca:string, modelo: string, ano: number, valor: number, disponivel: boolean ){

        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.valor = valor
        this.disponivel = disponivel
        
    }

    private marca: string;
    private modelo: string;
    private ano: number;
    private valor: number;
    private disponivel: boolean;
    

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
        this.disponivel = disponivel;
    }
    


    }


  






      //  detalhesVeiculos(marca:number):void{

        //}
    
      //  registroTrasacao(): void{
            
       // }
    


    

