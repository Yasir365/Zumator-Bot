import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home/Home';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
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