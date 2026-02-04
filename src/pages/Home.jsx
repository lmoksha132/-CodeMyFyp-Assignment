import React, { useState, useEffect } from 'react';
import { fetchUsers, fetchProducts } from '../services/api';
import UserCard from '../components/UserCard';
import Loader from '../components/Loader';
import ErrorMessage from '../components/ErrorMessage';
import SearchBar from '../components/SearchBar';
import ThemeToggle from '../components/ThemeToggle';
import './Home.css';

/**
 * Home Page Component
 * Handles the core state logic for user data fetching, filtering, and 
 * coordinates the display of Loader, Error, and User Grid.
 */
const Home = () => {
    const [users, setUsers] = useState([]); // Master item list (Users or Products)
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [dataSource, setDataSource] = useState('Users');
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('app-theme');
        if (savedTheme) return savedTheme;
        return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    });

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        document.body.setAttribute('data-theme', theme);
        localStorage.setItem('app-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };

    // Fetch data on component mount with fallback logic
    useEffect(() => {
        const getData = async () => {
            try {
                setLoading(true);
                const data = await fetchUsers();
                setUsers(data);
                setFilteredUsers(data);
                setDataSource('Users');
                setError(null);
            } catch (err) {
                console.warn('Users API failed, switching to Products API fallback.');
                try {
                    const fallbackData = await fetchProducts();
                    setUsers(fallbackData);
                    setFilteredUsers(fallbackData);
                    setDataSource('Products');
                    setError(null);
                } catch (fallbackErr) {
                    setError('Unable to load data from any source. Please check your connection.');
                }
            } finally {
                setLoading(false);
            }
        };

        getData();
    }, []);

    // Efficiently filter users when the search term or user list changes
    useEffect(() => {
        const results = users.filter(user =>
            user.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredUsers(results); // Update the list of filtered users
    }, [searchTerm, users]); // Re-run when searchTerm or users array changes

    // Conditional rendering based on loading and error states
    if (loading) return <Loader />; // Display loader while fetching data
    if (error) return <ErrorMessage message={error} />; // Display error message if an error occurred

    return (
        <div className="home-container">
            <header className="page-header">
                <div className="header-top">
                    <h1>Responsive {dataSource === 'Users' ? 'User' : 'Product'} Explorer</h1>
                    <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
                </div>
                <p>
                    {dataSource === 'Users'
                        ? 'Explore and connect with users in our network.'
                        : 'Explore our product catalog (Fallback Mode).'}
                </p>
                {/* SearchBar component for user input */}
                <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
            </header>

            <main className="user-grid">
                {/* Conditionally render UserCards or a no-results message */}
                {filteredUsers.length > 0 ? (
                    filteredUsers.map(user => (
                        <UserCard key={user.id} user={user} />
                    ))
                ) : (
                    <div className="no-results">
                        <p>No users found matching "{searchTerm}"</p>
                    </div>
                )}
            </main>

            <footer className="page-footer">
                <p>&copy; {new Date().getFullYear()} Responsive User Explorer. Designed by <span className="designer-name">Lakshmi Moksha Boya</span></p>
            </footer>
        </div>
    );
};

export default Home;
