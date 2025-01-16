import { Cart, Order, User } from "@/domain/entities";
import { IPaymentService } from "../interfaces/IPaymentService";
import { INotificationService } from "../interfaces/INotificationService";
import { ICartStorageService } from "../interfaces/ICartStorageService";
import { IOrderStorageService } from "../interfaces/IOrderStorageService";

export class OrderCase{
    constructor(
        private orderStorageService: IOrderStorageService,
        private paymentService: IPaymentService,
        private notificationService: INotificationService,
        private cartStorage: ICartStorageService,
    ){}

    async execute(cart: Cart,user: User,){
        const order = new Order(cart,user.id);
        const paid = await this.paymentService.pay(order.total);
        if (!paid)
        return this.notificationService.notify("Error while trying to pay");
        
        this.orderStorageService.save(order);
        this.cartStorage.clear()
    }
}

export class GetAllOrderCase{
    constructor(
        private orderStorageService: IOrderStorageService,
    ){}

    async execute(){
        return this.orderStorageService.get();
    }
}