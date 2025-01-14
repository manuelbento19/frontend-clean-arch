import { Cart, Order, User } from "@/domain/entities";
import { IPaymentService } from "../interfaces/IPaymentService";
import { INotificationService } from "../interfaces/INotificationService";
import { IOrderStorageService } from "../interfaces/IOrderStorageService";
import { ICartStorageService } from "../interfaces/ICartStorageService";

export class OrderCase{
    constructor(
        private paymentService: IPaymentService,
        private notificationService: INotificationService,
        private orderStorage: IOrderStorageService,
        private cartStorage: ICartStorageService,
    ){}

    async execute(cart: Cart,user: User,){
        const order = new Order(cart,user.id);
        const paid = await this.paymentService.pay(order.total);
        if (!paid)
        return this.notificationService.notify("Error while trying to pay");
        
        this.orderStorage.save(order);
        this.cartStorage.clear()
    }
}