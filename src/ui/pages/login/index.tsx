import { useUser } from "@/ui/hooks/user";
import { FormEvent,  } from "react";
import {Navigate} from "react-router-dom";

export default function Login() {
  const {user,authenticate} = useUser();

  if(user)
  return <Navigate to={"/"}/>;

  const onSubmit = async(e: FormEvent) =>{
    e.preventDefault();
    const email = (e.target as HTMLFormElement).email.value.trim();
    const password = (e.target as HTMLFormElement).password.value.trim();
    await authenticate.login(email,password)
  }

  return (
    <main>
        <form onSubmit={onSubmit}>
            <div>
                <label htmlFor="email">E-mail</label>
                <input name="email" type="email" id="email" />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input name="password" type="password" id="password" />
            </div>
            <button>Login</button>
        </form>
    </main>
  )
}
