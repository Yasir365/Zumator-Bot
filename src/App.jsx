import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import { useEffect } from "react";
import { registerUser, saveReferal, setupBackButton } from "./services/api.service";
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

    const saveRef = () => {
        const hash = window.location.hash.substring(1); 
        const decodedHash = decodeURIComponent(hash);
        const urlParams = new URLSearchParams(decodedHash);
        const ref = urlParams.get('startapp');
        console.log("Ref :: ", ref);

        // if (ref) {
        //     let data = JSON.parse(localStorage.getItem('userInfo'))
        //     if (data) {
        //         data['referral_id'] = ref;
        //         saveReferal(data)
        //     }
        // }
    }

    useEffect(() => {
        initWebApp();
        saveRef();
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
