export interface IPaymentService{
    pay: (amount: number) => Promise<boolean>;
}