import {useState, useEffect, useRef} from 'react';

import './style.css';
import moon from './moon.svg';
import sun from './sun.svg';

const ButtonDarkMode = () => {
    const [darkMode, setDarkMode] = useState('light');
    const btnRef = useRef(null);

    useEffect(() => {
        if (darkMode === 'dark') {
            document.body.classList.add('dark');
            btnRef.current.classList.add('dark-mode-btn__active');
        } else {
            document.body.classList.remove('dark');
            btnRef.current.classList.remove('dark-mode-btn__active');
        }
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode((current) => {
            return current === 'light' ? 'dark' : 'light';
        });
    }

    return (
        <button ref={btnRef} onClick={toggleDarkMode} className="dark-mode-btn">
            <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
            <img src={moon} alt="Dark mode" className="light-mode-btn__icon" />
        </button>
    );
}

export default ButtonDarkMode;