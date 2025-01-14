import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Layout from './layout';

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
            }
        ]
    }
])

export const RoutesProvider = () => <RouterProvider router={routers} /> 