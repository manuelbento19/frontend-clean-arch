import { Order } from "@domain/entities";

export interface IOrderStorageService {
    save: (data: Order) => void;
    get: () => Order[];
    clear: () => void;
}