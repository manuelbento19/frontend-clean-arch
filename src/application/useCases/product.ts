import { IProductRepository } from "../repositories/product";

export class GetAllProductCase{
    constructor(
        private repository: IProductRepository
    ){

    }
    execute(){
        return this.repository.getAll()
    }
}