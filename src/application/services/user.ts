import { User } from "@/domain/entities";
import { IUserStorageService } from "@/application/ports/IUserStorageService";
import { IStore } from "@/application/ports/IStore";

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