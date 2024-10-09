import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Home from './pages/base/Base';
import Ops from './pages/ops/Ops';
import ShipYard from './pages/ship-yard/ShipYard';
import Friends from './pages/friends/Friends';
import Money from './pages/arena/Arena';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '',
                element: <Home />,
            },
            {
                path: 'OPS',
                element: <Ops />,
            },
            {
                path: 'ship-yard',
                element: <ShipYard />,
            },
            {
                path: 'friends',
                element: <Friends />,
            },
            {
                path: 'money',
                element: <Money />,
            },
        ],
    },
    // {
    //     path: '*',
    //     element: <NotFound />,
    // }
]);

const Routes = () => {
    return <RouterProvider router={router} />;
};

export default Routes;