import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import { useEffect } from "react";
import { registerUser, saveReferal } from "./services/api.service";
import { useLocation } from 'react-router-dom';
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import { useDispatch } from "react-redux";
import { saveUser } from "./store/userInfoSlice";

export default function App() {
    const location = useLocation();
    const dispatch = useDispatch();

    // clearLocalStorage = () => {
    //     setInterval(() => {
    //         localStorage.clear();
    //         localStorage.removeItem("userInfo");
    //     }, 100);
    // };

    const initWebApp = async () => {
        if (typeof window === 'undefined') return;

        const WebApp = (await import('@twa-dev/sdk')).default;
        WebApp.ready();

        const { initDataUnsafe: user } = WebApp;
        const start_param = WebApp.initDataUnsafe.start_param;
        if (user?.user) {
            const data = await registerUser(user);
            dispatch(saveUser(data));
            if (!data.referral_id && start_param) {
                await saveReferral(start_param, user);
            }
        }
    };

    const saveReferral = async (ref, userData) => {
        delete userData['start_param'];
        userData['referral_id'] = +ref;
        const response = await saveReferal(userData);
        dispatch(saveUser(userData));
        // console.log("Saved Referral Data ::::::::::: ", response);
    };

    const setupBackButton = async () => {
        if (typeof window === 'undefined') return;

        const WebApp = (await import('@twa-dev/sdk')).default;
        WebApp.ready();

        if (location.pathname === '/') {
            WebApp.BackButton.hide();
        } else {
            WebApp.BackButton.show().onClick(() => window.history.back());
        }
    };

    useEffect(() => {
        initWebApp();
        localStorage.clear();
    }, []);

    useEffect(() => {
        setupBackButton();
    }, [location]);

    return (
        <>
            <TonConnectUIProvider manifestUrl="http://127.0.0.1:5173/tonconnect-manifest.json">
                <Outlet />
                <Navbar />
            </TonConnectUIProvider>
        </>
    );
}
