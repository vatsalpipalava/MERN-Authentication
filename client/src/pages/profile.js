import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { isLoggedIn } from '../components/cookie';
import Navbarmain from '../components/Navbarmain';
import Loader from '../components/Loader';

const Profile = () => {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        // Simulate checking authentication status
        setTimeout(() => {
            // Redirect to login page if user is not logged in
            if (!isLoggedIn()) {
                navigate('/login');
            } else {
                // User is authenticated, stop loading
                setLoading(false);
            }
        }, 1); // Adjust the timeout as needed - possiblely 1ms because i set 800ms for every link
    }, [navigate]);

    return (
        <div>
            {loading ? (
                // Show spinner while loading
                <Loader />
            ) : (
                // Render profile content if user is logged in
                <>
                    <Navbarmain />
                    <h1>Profile Page</h1>
                    <p>This page is only accessible to logged-in users.</p>
                </>
            )}
        </div>
    );
};

export default Profile;
