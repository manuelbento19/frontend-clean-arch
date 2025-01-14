import { Product } from "@/domain/entities";
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

        const cart = this.cartStorage.get();
        if (!cart) {
            return this.notificationService.notify("Cart is not available");
        }

        cart.products.push(product);

        this.cartStorage.save(cart);
        this.notificationService.notify(`Product ${product.name} added to cart`);
    }
}