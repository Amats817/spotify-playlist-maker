// src/Callback.jsx
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Callback = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // Get the access token from the URL hash
        const hash = window.location.hash;
        const token = new URLSearchParams(hash.replace("#", "?")).get("access_token");

        if (token) {
            // Store the token in localStorage
            localStorage.setItem("spotifyAccessToken", token);
            // example: const token = localStorage.getItem("spotifyAccessToken");

            // Redirect to the main app
            navigate("/main");
        } else {
            console.error("Access token not found in URL");
        }
    }, [navigate]);

    return <div>Logging in...</div>;
};

export default Callback;
