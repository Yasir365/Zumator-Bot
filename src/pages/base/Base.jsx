import { useState, useEffect } from 'react';
import './base.scss';


export default function Base() {
    const [value, setValue] = useState(0);

    useEffect(() => {
        const storedValue = localStorage.getItem('value');
        if (storedValue) {
            setValue(+storedValue);
        }
    }, []);

    const handleTap = () => {
        setValue((prevValue) => prevValue + 1);
        localStorage.setItem('value', String(value + 1));
    }

    return (
        <div className='base'>
            <h1 className="title">Base</h1>

            <div className='d-flex justify-content-center align-items-center'>
                <img
                    className='glow-on-click'
                    src="/images/logo.ico"
                    alt="coin"
                    onClick={handleTap}
                />
            </div>
            <h1 className="mt-5 text-center value">
                <span className={value < 10 ? 'text-danger' : value < 20 ? 'text-warning' : 'text-success'}>
                    {value}
                </span>
            </h1>
        </div>
    )
}