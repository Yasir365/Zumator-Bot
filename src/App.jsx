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

            const user = WebApp.initDataUnsafe;
            if (user && user.user) {
                const data = await registerUser(user);
                localStorage.removeItem('userInfo');
                localStorage.setItem('userInfo', JSON.stringify(data));
            }
        }
    };

    const saveRef = async () => {
        if (typeof window !== "undefined") {
            const WebApp = (await import("@twa-dev/sdk")).default;
            WebApp.ready();
            // setInitData(WebApp.initData);
            // setUserId(WebApp.initDataUnsafe.user?.id.toString() || "");
            // setStartParam(WebApp.initDataUnsafe.start_param || "");
            console.log(
                "--------------------------------",
                WebApp.initDataUnsafe.start_param
            );
            console.log(
                "::::::::::::::::::::::::::::: ",
                startParam
            );

            // if (ref) {
            //     let data = JSON.parse(localStorage.getItem('userInfo'))
            //     if (data) {
            //         data['referral_id'] = ref;
            //         saveReferal(data)
            //     }
            // }

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
        saveRef();
    }, [])


    useEffect(() => {
        setupBackButton();
    }, [location]);


    useEffect(() => {
        const getParams = async () => {
            if (typeof window !== 'undefined') {
                const WebApp = (await import('@twa-dev/sdk')).default;
                WebApp.ready();
                // console.log("::::::::::::::::::", WebApp.initData);
                // console.log("::::::::::::::::::", WebApp.initDataUnsafe.user?.id.toString() || '');
                console.log("::::::::::::::::::", WebApp.initDataUnsafe.start_param || '');
            }
        };

        getParams();
    }, [])


    return (
        <>
            <Outlet />
            <Navbar />
        </>
    )
}
