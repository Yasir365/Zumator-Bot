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
            const data = await registerUser(user);
            if (data) {
                localStorage.removeItem('userInfo');
                localStorage.setItem('userInfo', JSON.stringify(data));
            }
        }
    };

    const saveRef = () => {
        console.log("Current window location:", window.location.href); // Add this line
        const hash = window.location.hash.substring(1);  // Access directly from window.location
        console.log("Parsed hash:", hash); // Add this line
        const urlParams = new URLSearchParams(hash);
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


    return (
        <>
            <Outlet />
            <Navbar />
        </>
    )
}
