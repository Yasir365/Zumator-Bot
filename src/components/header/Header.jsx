import { Link } from 'react-router-dom'
import './header.scss'

export default function Header() {

    return (
        <header className='user-header'>
            <div className='profile-container'>
                <img src="/images/profile.png" alt="profile" />
                <p className="title">Jane Cooper (CEO)</p>
            </div>
            <div className='setting'>
                <Link to="/settings">
                    <img src="/images/icons/setting.png" alt="setting" />
                </Link>
            </div>
        </header>
    )
}
