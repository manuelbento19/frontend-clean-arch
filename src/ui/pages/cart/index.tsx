import { products } from '../../constants';
import style from './style.module.css';

export default function CartPage() {
  return (
    <main className={style.main}>
        <h1>Cart (5)</h1>
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
                        {products.slice(0,4).map((item,index)=>(
                            <tr key={item.id}>
                                <td>{index + 1}</td>
                                <td>{item.name}</td>
                                <td>${item.price}</td>
                            </tr>
                        ))}
                        
                    </tbody>
                </table>
            </div>
            <div className={style.box}>
                <h2>Summary</h2>
                <div>
                    <strong>Subtotal</strong>
                    <span>$19.99</span>
                </div>
                <div>
                    <strong>Taxes</strong>
                    <span>$1.99</span>
                </div>
                <div>
                    <strong>Shipping</strong>
                    <span>$0.00</span>
                </div>
                <hr/>
                <div>
                    <strong>Total</strong>
                    <span>$21.98</span>
                </div>
                <button>Checkout</button>
            </div>
        </div>
    </main>
  )
}