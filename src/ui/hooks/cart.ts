import { Product } from "@/domain/entities";
import { AddToCartCase } from "@/domain/useCases/cart";
import { CartStorageService } from "@/infrastructure/services/CartStorage";
import { NotificationService } from "@/infrastructure/services/Notification";
import { useCartStore } from "@/ui/stores"

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