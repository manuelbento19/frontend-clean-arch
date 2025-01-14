import { Link } from 'react-router-dom';
import styles from './home.module.css';
import { ProductList } from '../components/productList';

export default function Home() {
  return (
    <main className={styles.main}>
      <header>
        <h1>ProStore</h1>
        <Link to="/login">Login</Link>
      </header>
      <ProductList/>
    </main>
  )
}
