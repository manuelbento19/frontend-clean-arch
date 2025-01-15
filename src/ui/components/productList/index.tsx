import { products } from '../../constants'
import styles from './style.module.css'

export function ProductList() {
  return (
    <section className={styles.products}>
      {products.map(item=>(
        <article key={item.id}>
          <div>
            <h1>{item.name}</h1>
            <h2>$ {item.price}</h2>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam dignissimos praesentium eius earum quibusdam dolore a saepe, soluta unde rerum dolorem placeat odit? Sint, ad itaque! Cupiditate reprehenderit dicta deleniti.</p>
          <button>Buy</button>
        </article>
      ))}
    </section>
  )
}
