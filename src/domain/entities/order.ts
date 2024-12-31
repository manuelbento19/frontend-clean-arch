import { Cart } from "./cart";

export enum OrderStatus {
   new,
   delivery, 
   completed
}

export class Order {
    user_id: string;
    cart: Cart;
    status:OrderStatus = OrderStatus.new;
    total: number;
    created_at: Date;

    constructor(cart: Cart, user_id: string){
        this.cart = cart;
        this.user_id = user_id;
        this.created_at = new Date();
        this.total = cart.products.length
    }
}