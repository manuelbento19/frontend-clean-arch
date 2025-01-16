import { ToastContainer } from 'react-toastify'
import { RoutesProvider } from './routes'

export default function App() {
  return (
    <main>
      <RoutesProvider/>
      <ToastContainer />
    </main>
  )
}
