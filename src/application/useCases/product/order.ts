import { Cart, Order, User } from "@/domain/entities";

export class OrderProduct {
    constructor(){

    }
    handle(cart: Cart, user: User){
        const order = new Order(cart,user.id);

        return order
    }
}