import { Link } from 'react-router-dom'
import style from './style.module.css';
import { useUser } from '@/ui/hooks/user';

export function Header() {
  const {user} = useUser();

  return (
    <header className={style.header}>
        <Link to={"/"} className='logo'>
          <h1>ProStore</h1>
        </Link>
        <nav>
          {user ? <Link to="/cart">{user.email} (5)</Link> : <Link to="/login" className={style.button}>Login</Link>}
        </nav>
    </header>
  )
}
