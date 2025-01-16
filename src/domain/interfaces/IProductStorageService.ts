import { Product } from "@domain/entities";
import { IStorage } from "./IStorage";

export interface IProductStorageService extends IStorage<Product> {   
}