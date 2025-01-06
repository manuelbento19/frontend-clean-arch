import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Home from './pages/home';

const routers = createBrowserRouter([
    {
        path: "/",
        element: <Home/>
    }
])

export const RoutesProvider = () => <RouterProvider router={routers} /> 