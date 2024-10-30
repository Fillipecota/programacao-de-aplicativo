import { truncate } from "original-fs";
import { Client } from "pg";
import Veiculo from "src/entity/Veiculo";

export default class VeiculoRepository {
    private connection: Client

    constructor() {
        if (!this.connection) {
            this.connection = new Client({
                host: "localhost",
                port: 5432,
                database: 'revenda',
                user: 'postgres',
                password: 'senai'
            });
        }
    }

    async save(veiculo: Veiculo) {
        try {
            this.connection.connect();
            const sql = "INSERT INTO veiculos (id, modelo, cor, ano, preco, placa, imagem) VALUES ($1, $2, $3, $4, $5, $6, $7)";

            const value = [veiculo.getId(), veiculo.getModelo(), veiculo.getCor(), veiculo.getAno(), veiculo.getPreco(), veiculo.getPlaca(), veiculo.getImagem()]

            await this.connection.query(sql, value);
        } catch (error) {
            console.log(error)
        } finally {
            this.connection.end();
            this.connection = null;
        }
    }

    async findAll() {
        try {
            this.connection.connect();
            const sql = "SELECT * FROM veiculos"
            const result = await this.connection.query(sql);
            if (result.rows.length > 0) {
                return result.rows;
            } else {
                console.log("não foi encontrado nenhum valor !")
                return [];
            }
        } catch (error) {
            console.log(error)
            return [];
        } finally {
            this.connection.end();
        }
    }

    async findById(id: string) {
        try {
            this.connection.connect();
            const sql = "SELECT * FROM Veiculo WHERE id = $1";
            const result = await this.connection.query(sql, [id]);
            return result.rows;
        } catch (error) {
            console.log(error)
            return []
        } finally {
            this.connection.end();
            this.connection = null;
        }
    }
}