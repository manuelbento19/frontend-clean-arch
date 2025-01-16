import { useEffect, useState } from 'react'
import styles from './style.module.css'
import { Product } from '@domain/entities'
import { ProductRepository } from '@/infrastructure/repositories/product'
import { useCart } from '@/ui/hooks/cart'
import { useUser } from '@/ui/hooks/user'
import { GetAllProductCase } from '@/application/useCases/product'

const productRepository = new ProductRepository();
const getAllProductCase = new GetAllProductCase(productRepository);

export function ProductList() {
  const [products,setProducts] = useState<Product[]>([])
  const {addToCart, includeInCart} = useCart();
  const {user} = useUser();

  useEffect(()=>{
    getAllProductCase.execute().then(setProducts); 
  },[])
  
  return (
    <section className={styles.products}>
      {products.map(item=>(
        <article key={item.id}>
          <div>
            <h1>{item.name}</h1>
            <h2>${item.price}</h2>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam dignissimos praesentium eius earum quibusdam dolore a saepe, soluta unde rerum dolorem placeat odit? Sint, ad itaque! Cupiditate reprehenderit dicta deleniti.</p>
          {!includeInCart(item) && user && <button onClick={()=>addToCart.execute(item)}>Buy</button>}
        </article>
      ))}
    </section>
  )
}