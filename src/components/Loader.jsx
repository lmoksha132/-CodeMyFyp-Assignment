import React from 'react';
import './Loader.css';

const Loader = () => {
    return (
        <div className="loader-container" aria-label="Loading">
            <div className="spinner"></div>
            <p>Loading Users...</p>
        </div>
    );
};

export default Loader;
