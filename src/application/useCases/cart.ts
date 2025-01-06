import { Product } from "@/domain/entities";
import { ICartRepository } from "@/domain/repositories/ICartRepository";

export class AddToCart {
    constructor(private cartRepository: ICartRepository){ }

    execute(product: Product){
        if(!product)
            throw new Error("Select a product");

        this.cartRepository.add(product)
    }
}