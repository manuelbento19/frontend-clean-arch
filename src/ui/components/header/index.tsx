import { Link } from 'react-router-dom'
import style from './style.module.css';

export function Header() {
  return (
    <header className={style.header}>
        <Link to={"/"} className='logo'>
          <h1>ProStore</h1>
        </Link>
        <nav>
          <Link to="/cart">Cart (5)</Link>
          <Link to="/login">Login</Link>
        </nav>
    </header>
  )
}
