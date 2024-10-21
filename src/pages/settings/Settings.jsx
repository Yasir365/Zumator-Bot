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
                <li>
                    <Link to='/leaderboard' className='item'>
                        <div className='title'>Leaderboard</div>

                        <i className="fa-solid fa-chevron-right"></i>
                    </Link>
                </li>
                <li className='item' data-bs-toggle="modal" data-bs-target="#deleteModal">
                    <div>
                        <div className='title'>Delete Account</div>
                    </div>
                    <i className="fa-solid fa-chevron-right"></i>
                </li>
            </ul>


            {/* Delete Account Modal */}
            <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">  
                    <div class="modal-content">
                        <div class="modal-body">
                            <h5>Delete Account</h5>
                            <p>Are you sure you want to delete your account?</p>
                            <button type="button" class="btn"  onClick={() => deleteAccount()}>Sure</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
