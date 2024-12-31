import { Product } from "../entities/product";

export interface IProductRepository {
    get(): Promise<Product>
    order(): Promise<void>
}