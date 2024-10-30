import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import { useEffect, useState } from "react";
import { fetchUserInfo, saveUser } from "./services/api.service";

export default function App() {
    // const [user, setUser] = useState({})
    const [startParam, setStartParam] = useState('')

    const initWebApp = async () => {
        if (typeof window !== 'undefined') {
            const WebApp = (await import('@twa-dev/sdk')).default;
            WebApp.ready();

            const user = WebApp.initDataUnsafe;
            console.log("User :: ", user);
            
            const data = await saveUser(WebApp.initDataUnsafe)
            console.log("User Info :: ", data);
            
            // setUser(data)
            // localStorage.setItem('userInfo', JSON.stringify(data));


            // Access `start_param` via `initDataUnsafe`
            // const startParamData = WebApp.initDataUnsafe.start_param;

            // setStartParam(startParamData || ''); // Set to state or empty string

            // Log the whole initData to inspect all parameters
            // console.log("Complete initDataUnsafe:", WebApp.initDataUnsafe.tgWebAppStartParam);
            // console.log("tgWebAppStartParam:", WebApp.WebAppInitData);
            // console.log("initDataUnsafe:", WebApp.initDataUnsafe);
            // console.log("WebAppUser:", WebApp.start_param);
        }
    };

    useEffect(() => {
        initWebApp();
    }, [])



    // useEffect(() => {
    //     fetchUserInfo()
    //         .then(info => {
    //             localStorage.setItem('userInfo', JSON.stringify(info));
    //         })
    //         .catch(err => console.error(err));
    // }, []);
    return (
        <>
            <Outlet />
            <Navbar />
        </>
    )
}
