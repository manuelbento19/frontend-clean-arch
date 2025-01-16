import { OrderCase } from "@/domain/useCases/order";
import { CartStorageService } from "@/infrastructure/services/CartStorage";
import { NotificationService } from "@/infrastructure/services/Notification";
import { OrderStorageService } from "@/infrastructure/services/OrderStorage";
import { PaymentService } from "@/infrastructure/services/Payment";
import { useCartStore, useOrderStore } from "@/ui/stores"

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