import styles from './home.module.css';

export default function Home() {
  return (
    <section className={styles.products}>
            {Array.from(Array(4).keys()).map(item=>(
                <article key={item}>
                    <div>
                        <h1>Product {item + 1}</h1>
                        <h2>$ {Math.floor(Math.random() * 1000)}</h2>
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam dignissimos praesentium eius earum quibusdam dolore a saepe, soluta unde rerum dolorem placeat odit? Sint, ad itaque! Cupiditate reprehenderit dicta deleniti.</p>
                    <button>Buy</button>
                </article>
            ))}
    </section>
  )
}
