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
                await saveReferral(start_param, data.id);
            }
        } else {
            const params = {
                user: {
                    id: 7985990995,
                    first_name: 'Yasir',
                    last_name: 'Saleem'
                }
            }
            const data = await registerUser(params);
            dispatch(saveUser(data));
        }
    };

    const saveReferral = async (ref, id) => {
        const data = {
            id: id,
            referral_id: +ref
        }
        await saveReferal(data);
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
