import { Cart } from "@/domain/entities";
import { ICartStorageService } from "@domain/interfaces/ICartStorageService";
import { IStore } from "@/domain/interfaces/IStore";

export class CartStorageService implements ICartStorageService{

    constructor(
        private store: IStore<Cart | null>
    ){}

    save(data: Cart){
        this.store.setState({...data});
    }

    get(){
        return this.store.state;
    }

    clear(){
        this.store.setState(null);
    }

}