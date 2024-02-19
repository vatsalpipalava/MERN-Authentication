import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { user } from '../reducer/Actions';
import { useNavigate } from 'react-router-dom';
import Navbarmain from '../components/Navbarmain';
import Loader from '../components/Loader'; // Update the path as needed

const Profile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [loading, setLoading] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const timeout = setTimeout(() => {
                    setLoading(false);
                }, 500);

                const login = await dispatch(user());

                if (login === false) {
                    navigate('/login');
                }

                return () => clearTimeout(timeout);
            } catch (error) {
                navigate('/login');
            }
        };

        fetchData();

    }, [dispatch, navigate]);

    const users = useSelector((state) => state.user.user);

    if (!users) {
        navigate('/');
        return null; // Don't render anything if not logged in
    }

    return (
        <div>
            {loading ? (
                <Loader />
            ) : (
                <div>
                    <Navbarmain />

                    <div class="relative overflow-x-auto w-1/2 mx-auto mt-9">
                        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <tbody>
                                <tr class="">
                                    <th scope="row" class="px-6 py-4 text-lg text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        Username
                                    </th>
                                    <td class="px-6 py-4 text-md text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        {users.username}
                                    </td>
                                </tr>
                                <tr class="">
                                    <th scope="row" class="px-6 py-4 text-lg text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        Email
                                    </th>
                                    <td class="px-6 py-4 text-md text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                        {users.email}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            )}
        </div>
    );
};

export default Profile;