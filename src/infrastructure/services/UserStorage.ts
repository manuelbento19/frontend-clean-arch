import { User } from "@/domain/entities";
import { IUserStorageService } from "@domain/interfaces/IUserStorageService";
import { IStore } from "@/domain/interfaces/IStore";

export class UserStorageService implements IUserStorageService{

    constructor(
        private store: IStore<User | null>
    ){}

    save(data: User){
        this.store.setState(data);
    }

    get(){
        return this.store.state ;
    }

    clear(){
        this.store.setState(null);
    }

}