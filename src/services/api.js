const USERS_API = 'https://jsonplaceholder.typicode.com/users';
const PRODUCTS_API = 'https://fakestoreapi.com/products';

/**
 * Fetches data from a REST API with error handling.
 * @param {string} url - The URL to fetch from.
 * @returns {Promise<Array>}
 */
const fetchData = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
};

/**
 * Primary fetcher for users.
 */
export const fetchUsers = async () => {
    try {
        return await fetchData(USERS_API);
    } catch (error) {
        console.error('Users API failed, attempting fallback...', error);
        throw error; // Rethrow to let the UI handle the decision
    }
};

/**
 * Fallback fetcher for products if users fail.
 */
export const fetchProducts = async () => {
    try {
        const products = await fetchData(PRODUCTS_API);
        // Map products to user-like structure for display compatibility
        return products.map(p => ({
            id: p.id,
            name: p.title,
            email: `Price: $${p.price}`,
            company: { name: p.category },
            address: { city: 'Shop Now' },
            website: 'fakestoreapi.com',
            isProduct: true
        }));
    } catch (error) {
        throw new Error('All API sources failed.');
    }
};
