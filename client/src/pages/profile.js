// import React, { useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { isLoggedIn } from '../components/cookie';

// import Navbarmain from '../components/Navbarmain';

// const Profile = () => {
//     const navigate = useNavigate();

//     useEffect(() => {
//         // Redirect to login page if user is not logged in
//         if (!isLoggedIn()) {
//             navigate('/login');
//         }
//     }, [navigate]);

//     // Render profile content if user is logged in
//     return (
//         <div>
//             <Navbarmain />
//             <h1>Profile Page</h1>
//             <p>This page is only accessible to logged-in users.</p>
//         </div>
//     );
// };

// export default Profile;


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
        }, 0); // Adjust the timeout as needed
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
