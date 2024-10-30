import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import { useEffect } from "react";
import { registerUser } from "./services/api.service";

export default function App() {
    const initWebApp = async () => {
        if (typeof window !== 'undefined') {
            const WebApp = (await import('@twa-dev/sdk')).default;
            WebApp.ready();

            const user = WebApp.initDataUnsafe;
            const data = await registerUser(user);
            if (data) {
                localStorage.setItem('userInfo', JSON.stringify(data));
            }
        }
    };

    useEffect(() => {
        initWebApp();
    }, [])

    return (
        <>
            <Outlet />
            <Navbar />
        </>
    )
}
