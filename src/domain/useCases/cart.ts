import { Cart, Product } from "@/domain/entities";
import { INotificationService } from "../interfaces/INotificationService";
import { ICartStorageService } from "../interfaces/ICartStorageService";

export class AddToCartCase {
    constructor(
        private cartStorage: ICartStorageService,
        private notificationService: INotificationService
    ){ }

    execute(product: Product){
        if (!product) {
            return this.notificationService.notify("Select a product");
        }

        const cart = this.cartStorage.get() ?? new Cart();

        cart.products.push(product);

        this.notificationService.notify(`${product.name} added to cart`);
        this.cartStorage.save(cart);
    }
}