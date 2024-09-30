import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Base from './pages/base/Base';
import Ops from './pages/ops/Ops';
import Friends from './pages/friends/Friends';
import Arena from './pages/arena/Arena';
import ShipYard from './pages/ship-yard/ShipYard';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '',
                element: <Base />,
            },
            {
                path: 'ops',
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
                path: 'arena',
                element: <Arena />,
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