import { useCart } from '@/ui/hooks/cart';
import style from './style.module.css';
import { Navigate } from 'react-router-dom';
import { useUser } from '@/ui/hooks/user';
import { FormEvent } from 'react';
import { useOrders } from '@/ui/hooks/order';

export default function CartPage() {
    const {user} = useUser();
    const {cart} = useCart(); 
    const {orders,order} = useOrders(); 

    if(!user)
    return <Navigate to={"/login"}/>;

    const totalPrice = cart?.products.reduce((prev,current)=>prev + current.price,0) ?? 0

    const onSubmit = async(e: FormEvent) => {
        e.preventDefault();

        //const address = (e.target as HTMLFormElement).address.value.trim();
        if(cart && user)
        await order.execute(cart,user)
    } 

    return (
    <main className={style.main}>
        <section>
            <h1>Cart ({cart?.products.length ?? 0})</h1>
            <div className={style.grid}>
                <div className={style.box}>
                    <table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart?.products.map((item,index)=>(
                                <tr key={item.id}>
                                    <td>{index + 1}</td>
                                    <td>{item.name}</td>
                                    <td>${item.price}</td>
                                </tr>
                            ))}
                            
                        </tbody>
                    </table>
                </div>
                <form onSubmit={onSubmit} className={style.box}>
                    <h2>Summary</h2>
                    <div>
                        <strong>Subtotal</strong>
                        <span>${totalPrice}</span>
                    </div>
                    <div>
                        <strong>Taxes</strong>
                        <span>$0.00</span>
                    </div>
                    <div>
                        <strong>Shipping</strong>
                        <span>$0.00</span>
                    </div>
                    <hr/>
                    <div>
                        <strong>Total</strong>
                        <span>${totalPrice}</span>
                    </div>
                    <div>
                        <textarea name="address" id="" placeholder='Address'></textarea>
                    </div>
                    <button>Checkout</button>
                </form>
            </div>
        </section>
        <section>
            <h1>Orders ({orders.length ?? 0})</h1>
            <div className={style.box}>
                <table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Date</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders?.map((item,index)=>(
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{item.created_at && new Date(item.created_at).toISOString()}</td>
                                <td>${item.total}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    </main>
  )
}