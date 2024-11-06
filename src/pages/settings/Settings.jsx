import './settings.scss'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import swalToastr from '../../services/toastr.service'
import { useTranslation } from 'react-i18next';
import { deleteUserAccount } from '../../services/api.service';
import { useSelector, useDispatch } from 'react-redux';
import { saveUser } from '../../store/userInfoSlice';

export default function Settings() {
    const [selectedLanguage, setSelectedLanguage] = useState('English')
    const { t, i18n } = useTranslation();
    const userInfo = useSelector((state) => state.user.userInfo);
    const dispatch = useDispatch();


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

    const deleteAccount = async () => {
        const data = await deleteUserAccount({ userId: userInfo._id });

        if (data) {
            swalToastr('success', 'Account deleted successfully')
            dispatch(saveUser({}))
            const a = document.getElementById('closeDeleteModal')
            a?.click()
            window.location.href = 'https://web.telegram.org/k/';
        } else {
            swalToastr('error', 'Error deleting account')
        }
    }


    return (
        <div className='settings-pages'>
            <h3 className='heading'>{t('Settings')}</h3>

            <ul>
                <li>
                    <Link to='/change-language' className='item'>
                        <div>
                            <div className='title'>{t('Select-Language')}</div>
                            <small className='text-muted'>{t(selectedLanguage)}</small>
                        </div>
                        <i className="fa-solid fa-chevron-right"></i>
                    </Link>
                </li>
                <li>
                    <Link to='/privacy-policy' className='item'>
                        <div className='title'>{t('Privacy-Policy')}</div>
                        <i className="fa-solid fa-chevron-right"></i>
                    </Link>
                </li>
                <li>
                    <Link to='/leaderboard' className='item'>
                        <div className='title'>{t('Leaderboard')}</div>
                        <i className="fa-solid fa-chevron-right"></i>
                    </Link>
                </li>
                <li className='item' data-bs-toggle="modal" data-bs-target="#deleteModal">
                    <div className='title'>{t('Delete-Account')}</div>
                    <i className="fa-solid fa-chevron-right"></i>
                </li>
            </ul>


            {/* Delete Account Modal */}
            <div className="modal fade" id="deleteModal" aria-labelledby="deleteModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <span className='close' data-bs-dismiss="modal" id='closeDeleteModal'></span>
                    <div className="modal-content">
                        <div className="modal-body">
                            <h5>{t('Delete-Account')}</h5>
                            <p>{t('Are-you-sure-you-want-to-delete-your-account?')}</p>
                            <button type="button" className="btn" onClick={() => deleteAccount()}>{t('Sure')}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
