import { IPaymentService } from "@/application/ports/IPaymentService";
import { fakeAPI } from "../api";

export class PaymentService implements IPaymentService {
    async pay(amount: number){
        console.log("Amount",amount);
        return await fakeAPI(true)
    }
    
}
