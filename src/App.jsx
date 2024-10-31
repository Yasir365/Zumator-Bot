import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import { useEffect } from "react";
import { registerUser, saveReferal } from "./services/api.service";
import { useLocation, } from 'react-router-dom';
export default function App() {
    const location = useLocation();

    const initWebApp = async () => {
        if (typeof window !== 'undefined') {
            const WebApp = (await import('@twa-dev/sdk')).default;
            WebApp.ready();

            let user = WebApp.initDataUnsafe;
            if (user && user.user) {
                if (user.start_param) {
                    delete user.start_param
                }
                const data = await registerUser(user);
                localStorage.removeItem('userInfo');
                localStorage.setItem('userInfo', JSON.stringify(data));
                console.log("Register User Data ::::::::: ", data);

                if (user.start_param) {
                    saveRef();
                }
            }
        }
    };

    const saveRef = async () => {
        if (typeof window !== "undefined") {
            const WebApp = (await import("@twa-dev/sdk")).default;
            WebApp.ready();
            const ref = WebApp.initDataUnsafe.start_param || ''
            if (ref) {
                let data = JSON.parse(localStorage.getItem('userInfo'))
                if (data) {
                    data['referral_id'] = ref;
                    const response = await saveReferal(data)
                    console.log("Saved referal Data ::::::::: ", response);
                    
                    localStorage.setItem('userInfo', JSON.stringify(response));
                }
            }

        }
    }

    const setupBackButton = async () => {
        try {
            if (typeof window !== 'undefined') {
                const WebApp = (await import('@twa-dev/sdk')).default;
                WebApp.ready();

                if (location.pathname === '/') {
                    WebApp.BackButton.hide();
                } else {
                    WebApp.BackButton.show().onClick(() => {
                        window.history.back();
                    });
                }
            }
        } catch (error) {
            console.error('Error initializing WebApp:', error);
        }
    };


    useEffect(() => {
        initWebApp();
    }, [])


    useEffect(() => {
        setupBackButton();
    }, [location]);

    return (
        <>
            <Outlet />
            <Navbar />
        </>
    )
}
