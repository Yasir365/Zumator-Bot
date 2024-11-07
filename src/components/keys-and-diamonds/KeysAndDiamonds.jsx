import { useSelector } from "react-redux";

export default function KeysAndDiamonds() {
    const userInfo = useSelector((state) => state.user.userInfo);

    return (
        <div className='left'>
            <div className="item">
                <img src="/images/icons/key.webp" alt="" />
                <span>{userInfo ? userInfo.keys : 10}</span>
            </div>
            <div className="item">
                <img src="/images/icons/bonas.webp" alt="" />
                <span>{userInfo ? userInfo.diamonds : 5}</span>
            </div>
        </div>
    )
}
