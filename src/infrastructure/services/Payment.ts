import { IPaymentService } from "@domain/interfaces/IPaymentService";
import { fakeAPI } from "../api";

export class PaymentService implements IPaymentService {
    async pay(amount: number){
        console.log(amount);
        return await fakeAPI(true)
    }
    
}
