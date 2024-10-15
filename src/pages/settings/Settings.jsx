import './settings.scss'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function Settings() {
    const [selectedLanguage, setSelectedLanguage] = useState('English')
    useEffect(() => {
        const temp = localStorage.getItem('language')
        setSelectedLanguage(temp ? temp : 'English')
    }, [])
    return (
        <div className='settings-pages'>
            <h3 className='heading'>Settings</h3>

            <ul>
                <li>
                    <Link to='/change-language' className='item'>
                        <div>
                            <div className='title'>Select Language</div>
                            <small>{selectedLanguage}</small>
                        </div>
                        <i class="fa-solid fa-chevron-right"></i>
                    </Link>
                </li>
                <li>
                    <Link to='/privacy-policy' className='item'>
                        <div className='title'>Privacy Policy</div>

                        <i class="fa-solid fa-chevron-right"></i>
                    </Link>
                </li>
                <li className='item'>
                    <div>
                        <div className='title'>Delete Account</div>
                    </div>
                    <i class="fa-solid fa-chevron-right"></i>
                </li>
            </ul>
        </div>
    )
}
