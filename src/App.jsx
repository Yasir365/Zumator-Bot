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
                localStorage.setItem('userInfo', JSON.stringify(data));
            }
        }
    };

    const saveRef = () => {
        const urlParams = new URLSearchParams(location.hash.substring(1));
        const ref = urlParams.get('startapp');
        console.log("Ref ::::::: ", urlParams);

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
