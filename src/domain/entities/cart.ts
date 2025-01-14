import { Product } from "./product";

export class Cart {
    public products: Product[];

    constructor(){
        this.products = [];
    }
}