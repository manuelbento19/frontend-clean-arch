import { Order } from "@domain/entities";
import { IStorage } from "./IStorage";

export interface IOrderStorageService extends IStorage<Order> {

}