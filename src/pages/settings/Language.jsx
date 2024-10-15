import React, { useEffect } from 'react'
import { languages } from '../../services/data.service'

export default function Language() {

    const language = languages

    const [selectedLanguage, setSelectedLanguage] = React.useState('English')

    useEffect(() => {
        const temp = localStorage.getItem('language')
        setSelectedLanguage(temp ? temp : 'English')
    }, [])

    const changeLanguage = (item) => {
        localStorage.setItem('language', item)
        setSelectedLanguage(item)
    }
    return (
        <div className='settings-pages'>
            <h3 className='heading'>Select Language</h3>

            <ul>
                {
                    language.map((item, index) => (
                        <li className='item' key={index} onClick={() => changeLanguage(item)}>
                            <div>
                                <div className='title'>{item}</div>
                            </div>
                            {item === selectedLanguage ? <i class="fa-solid fa-check"></i> : null}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
