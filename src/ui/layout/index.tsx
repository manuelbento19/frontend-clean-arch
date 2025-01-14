import { Outlet } from "react-router-dom";
import { Header } from "../components/header";
import style from './style.module.css';

export default function Layout() {
  return (
    <main className={style.layout}>
        <Header/>
        <section>
          <Outlet/>
        </section>
    </main>
  )
}
