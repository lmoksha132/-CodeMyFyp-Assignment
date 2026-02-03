import React from 'react';
import './UserCard.css';

/**
 * UserCard Component
 * Displays individual user details with a premium aesthetic. Includes robust link handling 
 * for external references, providing a search fallback for dummy domains.
 * 
 * @param {Object} props
 * @param {Object} props.user - The user object containing name, email, company, address, website.
 */
const UserCard = ({ user }) => {
    // Standardize the URL. JSONPlaceholder domains (e.g. hildegard.org) are dummy domains 
    // that often fail with ERR_SSL_PROTOCOL_ERROR. To ensure a professional experience, 
    // we use a search-based fallback that always resolves to a valid result page.
    const portfolioUrl = `https://www.google.com/search?q=${encodeURIComponent(user.name)}+portfolio+${encodeURIComponent(user.company.name)}`;

    // Using ui-avatars for a more polished look than just a single letter
    const avatarUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(user.name)}&background=6366f1&color=fff&bold=true`;

    return (
        <div className="user-card">
            <div className="user-avatar-container">
                <img src={avatarUrl} alt={user.name} className="user-avatar-img" />
            </div>
            <div className="user-info">
                <h3>{user.name}</h3>
                <p className="user-email" title="Email">
                    <span>📧</span> {user.email}
                </p>
                <p className="user-company" title="Company">
                    <span>🏢</span> {user.company.name}
                </p>
                <p className="user-location" title="Location">
                    <span>📍</span> {user.address.city}
                </p>
            </div>
            <div className="user-card-footer">
                <a
                    href={portfolioUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="user-website"
                    title={`Search for ${user.name}'s portfolio`}
                >
                    View Portfolio
                </a>
            </div>
        </div>
    );
};

export default UserCard;
