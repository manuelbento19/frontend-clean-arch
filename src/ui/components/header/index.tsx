import { Link } from 'react-router-dom'
import style from './style.module.css';
import { useUser } from '@/ui/hooks/user';
import { useCart } from '@/ui/hooks/cart';

export function Header() {
  const {user} = useUser();
  const {cart} = useCart();

  return (
    <header className={style.header}>
        <Link to={"/"} className='logo'>
          <h1>ProStore</h1>
        </Link>
        <nav>
          {user ? <Link to="/cart">{user.email} ({cart?.products.length ?? 0})</Link> : <Link to="/login" className={style.button}>Login</Link>}
        </nav>
    </header>
  )
}
