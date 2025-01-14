import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Layout from './layout';
import CartPage from './pages/cart';

const routers = createBrowserRouter([
    {
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/login",
                element: <Login/>
            },
            {
                path: "/cart",
                element: <CartPage/>
            }
        ]
    }
])

export const RoutesProvider = () => <RouterProvider router={routers} /> 