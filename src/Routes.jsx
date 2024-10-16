import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Home from './pages/home/Home';
import Ops from './pages/ops/Ops';
import ShipYard from './pages/ship-yard/ShipYard';
import Friends from './pages/friends/Friends';
import Money from './pages/arena/Arena';
import Settings from './pages/settings/Settings';
import PrivacyPolicy from './pages/settings/Privacy-Policy';
import Language from './pages/settings/Language';

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
            {
                path: 'settings',
                element: <Settings />,
            },
            {
                path: 'privacy-policy',
                element: <PrivacyPolicy />,
            },
            {
                path: 'change-language',
                element: <Language />,
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