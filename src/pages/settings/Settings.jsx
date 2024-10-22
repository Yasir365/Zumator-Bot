import './settings.scss'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import swalToastr from '../../services/toastr.service'

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
        localStorage.clear()
        swalToastr('success', 'Account deleted successfully')
    }


    return (
        <div className='settings-pages'>
            <h3 className='heading'>Settings</h3>

            <ul>
                <li>
                    <Link to='/change-language' className='item'>
                        <div>
                            <div className='title'>Select Language</div>
                            <small className='text-muted'>{selectedLanguage}</small>
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
                <li>
                    <Link to='/leaderboard' className='item'>
                        <div className='title'>Leaderboard</div>
                        <i className="fa-solid fa-chevron-right"></i>
                    </Link>
                </li>
                <li className='item' data-bs-toggle="modal" data-bs-target="#deleteModal">
                    <div className='title'>Delete Account</div>
                    <i className="fa-solid fa-chevron-right"></i>
                </li>
            </ul>


            {/* Delete Account Modal */}
            <div className="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body">
                            <h5>Delete Account</h5>
                            <p>Are you sure you want to delete your account?</p>
                            <button type="button" className="btn" onClick={() => deleteAccount()}>Sure</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
