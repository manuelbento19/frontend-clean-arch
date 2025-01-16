import { CartStorageService } from "@/application/services/cart";
import { NotificationService } from "@/infrastructure/services/notification";
import { OrderStorageService } from "@/application/services/order";
import { PaymentService } from "@/infrastructure/services/payment";
import { useCartStore, useOrderStore } from "@/ui/stores"
import { OrderCase } from "@/application/useCases/order";

const notificationService = new NotificationService();
const paymentService = new PaymentService();

export const useOrders = () => {
    const store = useOrderStore();
    const orderStorageService = new OrderStorageService(store as never);
    const cartStore = useCartStore();
    const cartStorageService = new CartStorageService(cartStore);
    
    const orderCase = new OrderCase(orderStorageService,paymentService,notificationService,cartStorageService);

    return {
        orders: store.state,
        order: orderCase,
    }
}