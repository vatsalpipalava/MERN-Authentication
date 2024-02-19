import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { user } from '../reducer/Actions';
import { useNavigate } from 'react-router-dom';
import Loader from '../components/Loader'; // Update the path as needed

const Profile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     const timeout = setTimeout(() => {
    //         setLoading(false);
    //     }, 500);

    //     dispatch(user(navigate));

    //     return () => clearTimeout(timeout);
    // }, [dispatch, navigate]);

    // useEffect(() => {
    //     try {
    //         const timeout = setTimeout(() => {
    //             setLoading(false);
    //         }, 500);

    //         dispatch(user());

    //         return () => clearTimeout(timeout);
    //     } catch (error) {
    //         navigate('/login');
    //     }
    // })

    useEffect(() => {
        const fetchData = async () => {
            try {
                const timeout = setTimeout(() => {
                    setLoading(false);
                }, 500);
    
                const login = await dispatch(user());

                if(login===false){
                    navigate('/login');
                }
    
                return () => clearTimeout(timeout);
            } catch (error) {
                navigate('/login');
            }
        };
    
        fetchData();
    });

    const users = useSelector((state) => state.user.user);

    return (
        <div>
            {loading ? (
                <Loader />
            ) : (
                <div>
                    <p>Username: {users.username}</p>
                    <p>Email: {users.email}</p>
                    {/* Add other user data fields here */}
                </div>
            )}
        </div>
    );
};

export default Profile;




