import Header from "./components/header/Header";
import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";


export default function App() {
    return (
        <>
            <div className="outlet-container">
                <Outlet />
            </div>
            <Navbar />
        </>
    )
}
