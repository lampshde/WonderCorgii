import React, { useState, useEffect  } from 'react';import './DarkModeToggle.scss'

export default function DarkModeToggle(props) {

    const [theme, setTheme] = useState(0);

    useEffect(() => {
        const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

        if (currentTheme) {
            document.documentElement.setAttribute('data-theme', currentTheme);
            if (currentTheme === 'dark') {
                setTheme('dark');
            }
            else{
                setTheme('light')
            }
        }
        else {
            setTheme('light')
        }
    }, []);

    const switchTheme = (e) => {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            setTheme('dark');
        }
        else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            setTheme('light');
        }    
    }

    return( 
        <div>
            <div className="theme-switch-wrapper">
                <label className="theme-switch" htmlFor="checkbox">
                    <input type="checkbox" id="checkbox" onChange={switchTheme} checked={theme==='dark'}/>
                    <div className="slider round"></div>
                </label>
                <em>Enable Dark Mode!</em>
            </div>
        </div>
    );
}