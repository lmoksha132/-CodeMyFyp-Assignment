import React from 'react';
import './ThemeToggle.css';

/**
 * ThemeToggle Component
 * A professional toggle switch to switch between Light and Dark modes.
 * 
 * @param {Object} props
 * @param {String} props.theme - Current theme ('light' or 'dark').
 * @param {Function} props.toggleTheme - Function to toggle the theme.
 */
const ThemeToggle = ({ theme, toggleTheme }) => {
    return (
        <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
            <div className="toggle-track">
                <div className={`toggle-icon ${theme === 'light' ? 'sun' : 'moon'}`}>
                    {theme === 'light' ? '☀️' : '🌙'}
                </div>
            </div>
        </button>
    );
};

export default ThemeToggle;
