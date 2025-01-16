import { useEffect, useState } from 'react'
import styles from './style.module.css'
import { Product } from '@domain/entities'
import { ProductRepository } from '@/infrastructure/repositories/product'
import { GetAllProductCase } from '@/domain/useCases/product'

const productRepository = new ProductRepository();
const getAllProductCase = new GetAllProductCase(productRepository);

export function ProductList() {
  const [products,setProducts] = useState<Product[]>([])
  
  useEffect(()=>{
    getAllProductCase.execute().then(setProducts); 
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
