import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import { useEffect } from "react";
import { fetchUserInfo } from "./services/api.service";

export default function App() {
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
