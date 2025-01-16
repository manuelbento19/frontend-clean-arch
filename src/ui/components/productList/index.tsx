import { useEffect, useState } from 'react'
import * as CONSTANTS from '../../constants'
import styles from './style.module.css'
import { Product } from '@domain/entities'
import { fakeAPI } from '@infrastructure/api'

export function ProductList() {
  const [products,setProducts] = useState<Product[]>([])
  
  useEffect(()=>{
    fakeAPI(CONSTANTS.products).then(setProducts); 
  },[])
  
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
