import React from 'react';
import './ErrorMessage.css';

const ErrorMessage = ({ message }) => {
    return (
        <div className="error-container" role="alert">
            <div className="error-icon">⚠️</div>
            <h3>Something went wrong</h3>
            <p>{message || 'Unable to fetch data. Please try again later.'}</p>
            <button onClick={() => window.location.reload()} className="retry-button">
                Retry
            </button>
        </div>
    );
};

export default ErrorMessage;
