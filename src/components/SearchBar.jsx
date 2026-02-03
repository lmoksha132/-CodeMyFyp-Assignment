import React from 'react';
import './SearchBar.css';

/**
 * SearchBar Component
 * A professional-grade search input with glassmorphism styling, persistent icons, 
 * and a clear-all functionality for improved UX.
 * 
 * @param {Object} props
 * @param {string} props.searchTerm - Current value of the search input.
 * @param {Function} props.onSearchChange - Callback triggered when the search term changes.
 */
const SearchBar = ({ searchTerm, onSearchChange }) => {
    return (
        <div className="search-container">
            <div className="search-icon" aria-hidden="true">🔍</div>
            <input
                type="text"
                placeholder="Filter by name..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="search-input"
                aria-label="Filter users by name"
            />
            {searchTerm && (
                <button
                    className="search-clear"
                    onClick={() => onSearchChange('')}
                    aria-label="Clear filter"
                    title="Clear filter"
                >
                    ✕
                </button>
            )}
        </div>
    );
};

export default SearchBar;
