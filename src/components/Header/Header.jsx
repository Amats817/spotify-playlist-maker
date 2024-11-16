import React, { useEffect, useState } from 'react';
import { getUserProfile } from '../../SpotifyAPI';
import defaultProfile from "../../images/defaultProfile.jpg";
import './header.css'

const Header = () => {
    const [username, setUsername] = useState('');
    const [profileImage, setProfileImage] = useState(defaultProfile); 

    const fetchUserProfile = async () => {
        const profile = await getUserProfile();
        if (profile) {
            setUsername(profile.display_name);
            setProfileImage(profile.images[0]?.url || defaultProfile); 
        }
    };

    useEffect(() => {
        fetchUserProfile();
    }, []);

    return (
        <div>
           <div className="profile">
           <img
                    src={profileImage}
                    alt={`${username}'s profile`}
                    className='profile-img'
                />
            <h1>Welcome {username}!</h1>
           </div>
        </div>
    );
};

export default Header;
