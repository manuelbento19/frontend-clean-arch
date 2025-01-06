import { Product } from "../entities";

export interface ICartRepository {
    add: (product: Product) => void
}