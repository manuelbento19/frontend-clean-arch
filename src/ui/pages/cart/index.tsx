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
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                Name
                            </td>
                            <td>$19.99</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className={style.box}>
                <h2>Summary</h2>
                <div >
                    <span>Subtotal</span>
                    <span>$19.99</span>
                </div>
                <div >
                    <span>Taxes</span>
                    <span>$1.99</span>
                </div>
                <div >
                    <span>Shipping</span>
                    <span>$0.00</span>
                </div>
                <hr/>
                <div>
                    <span>Total</span>
                    <span>$21.98</span>
                </div>
                <button>Checkout</button>
            </div>
        </div>
    </main>
  )
}
