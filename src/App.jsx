import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import { useEffect } from "react";
import { registerUser, saveReferal } from "./services/api.service";
import { useLocation } from 'react-router-dom';
import { TonConnectUIProvider } from "@tonconnect/ui-react";

export default function App() {
    const location = useLocation();

    // Initialize the WebApp SDK and register the user
    const initWebApp = async () => {
        if (typeof window === 'undefined') return;

        const WebApp = (await import('@twa-dev/sdk')).default;
        WebApp.ready();
        console.log("start param ::::::::: ", WebApp.initDataUnsafe.start_param);

        const { initDataUnsafe: user } = WebApp;
        if (user?.user) {
            if (user.start_param) delete user.start_param;

            const data = await registerUser(user);
            localStorage.setItem('userInfo', JSON.stringify(data));
        }
    };

    // Save referral information if available
    const saveReferral = async () => {
        if (typeof window === "undefined") return;

        const WebApp = (await import("@twa-dev/sdk")).default;
        WebApp.ready();

        const ref = WebApp.initDataUnsafe.start_param || '';
        if (ref) {
            let userData = JSON.parse(localStorage.getItem("userInfo")) || {};
            userData['referral_id'] = +ref;
            const response = await saveReferal(userData);
            console.log("Saved Referral Data ::::::::::: ", response);
            localStorage.setItem('userInfo', JSON.stringify(userData));
        }
    };

    // Set up back button behavior based on route
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
        saveReferral();
    }, []);
    useEffect(() => {
        setupBackButton();
    }, [location]);

    return (
        <>
            <TonConnectUIProvider manifestUrl="https://zumator-bot.vercel.app/tonconnect-manifest.json">
                <Outlet />
                <Navbar />
                </TonConnectUIProvider>
        </>
    );
}
