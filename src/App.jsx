import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import { useEffect } from "react";
import { registerUser, saveReferal } from "./services/api.service";
import { useLocation } from 'react-router-dom';
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
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
        console.log("start param ::::::::: ", start_param);
        if (user?.user) {
            if (user.start_param) delete user.start_param;

            const data = await registerUser(user);
            localStorage.setItem('userInfo', JSON.stringify(data));
            dispatch(saveUser(data));
            await saveReferral();
        }
    };

    const saveReferral = async () => {
        
        if (typeof window === "undefined") return;
        
        const WebApp = (await import("@twa-dev/sdk")).default;
        WebApp.ready();
        
        const ref = WebApp.initDataUnsafe.start_param || '';
        console.log("saveReferral ::::::::: ", ref);	
        if (ref) {
            let userData = useSelector((state) => state.user.userInfo);
            console.log("saveReferral userData ::::::::: ", userData);	

            userData['referral_id'] = +ref;
            const response = await saveReferal(userData);
            dispatch(saveUser(userData));
            localStorage.setItem('userInfo', JSON.stringify(userData));
            // console.log("Saved Referral Data ::::::::::: ", response);
        }
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
        // saveReferral();
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
