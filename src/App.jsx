import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import { useEffect } from "react";
import { fetchUserInfo } from "./services/api.service";

export default function App() {
    let tg;
    if (window.Telegram && window.Telegram.WebApp) {
        tg = window.Telegram.WebApp;
    }

    function updateButton() {
        if (window.Telegram && window.Telegram.WebApp) {
            console.log("window.location.pathname", window.location.pathname);
            
            if (window.location.pathname != "OPS" || window.location.pathname != "ship-yard" || window.location.pathname != "friends" ||
                window.location.pathname != "arena" || window.location.pathname != "leaderboard" || window.location.pathname != "settings" ||
                window.location.pathname != "privacy-policy" || window.location.pathname != "change-language" || window.location.pathname != "rewards"
            ) {
                tg.BackButton.hide();
                tg.MainButton.show().setText("Close").onClick(() => {
                    tg.close();
                });
            } else {
                tg.MainButton.hide();
                tg.BackButton.show().onClick(() => {
                    window.history.back();
                });
            }
        }
    }

    updateButton();
    window.addEventListener("popstate", updateButton);

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
