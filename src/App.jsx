import Header from "./components/header/Header";
import { Outlet } from "react-router-dom";


export default function App() {
    return (
        <>
            <Header />
            <div className="container outlet-container">
                <Outlet />
            </div>
        </>
    )
}
