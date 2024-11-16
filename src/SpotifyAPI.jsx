import axios from 'axios';

// Spotify API URL
const API_URL = 'https://api.spotify.com/v1';

// Function to get the access token from localStorage
const getAccessToken = () => {
    const token = localStorage.getItem('spotifyAccessToken');
    if (!token) {
        throw new Error('Access token is missing!');
    }
    return token;
};

// Function to make API requests
const makeRequest = async (endpoint, method = 'GET', data = null, params = null) => {
    const token = getAccessToken();
    const headers = {
        Authorization: `Bearer ${token}`,
    };

    const config = {
        method,
        url: `${API_URL}${endpoint}`,
        headers,
        data,
        params,
    };

    try {
        const response = await axios(config);
        return response.data;
    } catch (error) {
        throw new Error(error.response ? error.response.data.error.message : 'Error making request');
    }
};

// Fetch user profile data
export const getUserProfile = async () => {
    try {
        const data = await makeRequest('/me');
        return data;
    } catch (error) {
        console.error('Error fetching user profile:', error);
        throw error;  // Rethrow the error to handle it in the caller
    }
};

// Search for tracks based on the query
export const fetchSearchResults = async (searchQuery) => {
    try {
        const data = await makeRequest('/search', 'GET', null, { q: searchQuery, type: 'track' });
        return data.tracks.items || [];
    } catch (error) {
        console.error('Failed to fetch search results:', error);
        throw error;  // Rethrow the error to handle it in the caller
    }
};

// Create a new playlist
export const createPlaylist = async (name, tracks) => {
    try {
        // Get the user's ID
        const userData = await makeRequest('/me');
        const userId = userData.id;

        // Create the playlist
        const createPlaylistData = await makeRequest(`/users/${userId}/playlists`, 'POST', {
            name,
            description: 'Created via my app',
            public: false, // Set to true if you want the playlist to be public
        });

        const playlistId = createPlaylistData.id;

        // Add tracks to the playlist
        const trackUris = tracks.map((track) => track.uri);
        await makeRequest(`/playlists/${playlistId}/tracks`, 'POST', { uris: trackUris });

        return createPlaylistData;  // Return the playlist data with ID and other info
    } catch (error) {
        console.error('Error creating playlist:', error);
        throw error;  // Rethrow the error to handle it in the caller
    }
};

// Check if the user is logged in (i.e., token is available)
export const isLoggedIn = () => {
    const token = getAccessToken();
    return !!token;  // Returns true if a token is found
};

// Log out the user (clear the token from localStorage)
export const logout = () => {
    localStorage.removeItem('spotifyAccessToken');
};
