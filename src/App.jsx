import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import { useEffect, useState } from "react";
import { fetchUserInfo } from "./services/api.service";

export default function App() {
    const [startParam, setStartParam] = useState('')

    const initWebApp = async () => {
        if (typeof window !== 'undefined') {
            const WebApp = (await import('@twa-dev/sdk')).default;
            

            // Make WebApp ready
            WebApp.ready();

            // Access `start_param` via `initDataUnsafe`
            const startParamData = WebApp.initDataUnsafe.start_param;
            setStartParam(startParamData || ''); // Set to state or empty string

            // Log the whole initData to inspect all parameters
            console.log("Complete initData:", WebApp.initDataUnsafe.tgWebAppStartParam);
            console.log("start_param:", startParamData);
        }
    };

    useEffect(() => {
        initWebApp();
    }, [])



    useEffect(() => {
        fetchUserInfo()
            .then(info => {
                localStorage.setItem('userInfo', JSON.stringify(info));
            })
            .catch(err => console.error(err));
    }, []);
    return (
        <>
            <Outlet />
            <Navbar />
        </>
    )
}
