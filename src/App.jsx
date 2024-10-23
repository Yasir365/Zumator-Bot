import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import { setFullHeight } from "./services/api.service";

export default function App() {
    setFullHeight()
    return (
        <>
            <Outlet />
            <Navbar />
        </>
    )
}
