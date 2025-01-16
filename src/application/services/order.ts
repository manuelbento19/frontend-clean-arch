import { Order } from "@/domain/entities";
import { IStore } from "@/application/ports/IStore";
import { IOrderStorageService } from "@/application/ports/IOrderStorageService";

export class OrderStorageService implements IOrderStorageService{

    constructor(
        private store: IStore<Order[]>
    ){}
    save(data: Order){
        const orders = [...this.store.state, data];
        this.store.setState(orders);
    };
    get(): Order[]{
        return this.store.state;
    };

    clear(){
        this.store.setState([]);
    };
}