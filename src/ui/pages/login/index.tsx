
export default function Login() {
  return (
    <main>
        <form>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" />
            </div>
            <button>Login</button>
        </form>
    </main>
  )
}
