import { Product } from "../entities";

export interface IProductRepository {
    getAll: () => Promise<Product[]>;
}