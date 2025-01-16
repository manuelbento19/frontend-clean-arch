import { Cart } from "@/domain/entities";
import { ICartStorageService } from "@/application/ports/ICartStorageService";
import { IStore } from "@/application/ports/IStore";

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