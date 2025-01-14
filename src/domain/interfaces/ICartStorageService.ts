import { Cart } from "@/domain/entities";
import { IStorage } from "./IStorage";

export interface ICartStorageService extends IStorage<Cart> {

}