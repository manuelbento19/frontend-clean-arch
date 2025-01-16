import { Product } from "@/domain/entities";
import { CartStorageService } from "@/application/services/cart";
import { NotificationService } from "@/infrastructure/services/notification";
import { useCartStore } from "@/ui/stores"
import { AddToCartCase } from "@/application/useCases/cart";

const notificationService = new NotificationService();

export const useCart = () => {
    const store = useCartStore();
    const cartStorage = new CartStorageService(store);
    
    const addToCart = new AddToCartCase(cartStorage,notificationService);

    const includeInCart = (product: Product) => store.state?.products.some(item=>item.id === product.id); 
    
    return {
        cart: store.state,
        addToCart,
        includeInCart
    }
}