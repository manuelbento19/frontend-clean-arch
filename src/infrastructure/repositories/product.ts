import { Product } from "@/domain/entities";
import { IProductRepository } from "@/domain/repositories/product";
import { fakeAPI } from "../api";
import { genArray } from "../utils";

export class ProductRepository implements IProductRepository{
    getAll(): Promise<Product[]>{
        const products: Product[] = genArray(18).map(item=>{
            const id = (item + 1).toString();
            return {
                id,
                name: `Product ${id}`,
                price: Math.floor(Math.random() * 1000)
            }
        })
        return fakeAPI(products)
    }
}