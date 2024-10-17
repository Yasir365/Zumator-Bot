import './settings.scss'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'

export default function Settings() {
    const [selectedLanguage, setSelectedLanguage] = useState('English')
    useEffect(() => {
        let temp = localStorage.getItem('language')
        try {
            temp = temp ? JSON.parse(temp) : null;
        } catch (e) {
            console.error("Error parsing language from localStorage:", e);
            temp = null;
        }
        setSelectedLanguage(temp ? temp.name : 'English')
    }, [])

    const deleteAccount = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire('Deleted!', 'Your Account has been deleted.', 'success')

                localStorage.clear()
            }
        })
    }
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
                        <i className="fa-solid fa-chevron-right"></i>
                    </Link>
                </li>
                <li>
                    <Link to='/privacy-policy' className='item'>
                        <div className='title'>Privacy Policy</div>

                        <i className="fa-solid fa-chevron-right"></i>
                    </Link>
                </li>
                <li className='item' onClick={() => deleteAccount()}>
                    <div>
                        <div className='title'>Delete Account</div>
                    </div>
                    <i className="fa-solid fa-chevron-right"></i>
                </li>
            </ul>
        </div>
    )
}
