import { Cart, Product } from "@/domain/entities";

export class AddToCartCase {
    constructor(private cart: Cart){ }

    execute(product: Product){
        if(!product)
            throw new Error("Select a product");

        this.cart.products.push(product)
    }
}