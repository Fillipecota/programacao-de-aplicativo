import { Client } from "pg";
import Product from "../entity/Product";
import prisma from "../prisma";


export default class ProductRepository {
    private connection: Client;

    public async save(product: Product) {

        try {
            await prisma.produto.create({
                data: {
                    id: product.getId(),
                    name: product.getName(),
                    category: product.getCategory(),
                    manufacturer: product.getManufacturer(),
                    amount: Number(product.getAmount()),
                    updatedAt: product.getUpdateAt(),
                    createdAt: product.getCreateAt()
                }
            })
        } catch (err) {
            console.log(err)
        }

    }


    public async findAll() {
        try {
            return await prisma.produto.findMany();
        } catch (error: any) {
            console.log(error)
        } 
    }

    public async findAmountByCategory() {
        try {
            return prisma.produto.groupBy({
                by: ['category'],
                _sum: { amount: true },
                orderBy: { _sum: { amount: 'asc' } }
            })

        } catch (error: any) {
            console.log(error)

        }
    }
}