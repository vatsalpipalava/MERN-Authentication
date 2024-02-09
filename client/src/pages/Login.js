import React, { useState } from "react";
import LoginBack from '../images/login-back.jpg';
import { useDispatch  } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../reducer/Actions";

export default function Login() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLoginUser = async (event) => {
        event.preventDefault();

        const newUser = {
            email: email,
            password: password,
        };

        await dispatch(loginUser(newUser, navigate));

    }


    return (
        <>
            <div className="flex flex-col md:flex-row w-full">
                {/* First Section */}
                <div className="md:w-1/2 md:relative h-screen w-full absolute">
                    <img src={LoginBack} className="h-full w-full object-cover" alt="login" />
                    <div className="absolute inset-0 backdrop-blur-3xl"></div>
                </div>

                {/* Second Section */}
                <div className="md:w-1/2 relative w-full h-screen flex items-center justify-center">
                    <div className="w-10/12 bg-white p-10 rounded-lg shadow-2xl md:shadow-none md:w-full">
                        {/* <div className=""> */}
                        <div className="flex flex-1 flex-col justify-center w-full">

                            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                                <a href="/">
                                    <img
                                        className="mx-auto h-10 w-auto"
                                        src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                                        alt="Your Company"
                                    />
                                </a>
                                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                                    Sign in to your account
                                </h2>
                            </div>

                            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                                <form className="space-y-6" action="#" method="POST">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                            Email address
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                // autocomplete="email"
                                                required
                                                className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <div className="flex items-center justify-between">
                                            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                                Password
                                            </label>
                                            <div className="text-sm">
                                                <a href="/" className="font-semibold text-indigo-600 hover:text-indigo-500">
                                                    Forgot password?
                                                </a>
                                            </div>
                                        </div>
                                        <div className="mt-2">
                                            <input
                                                id="password"
                                                name="password"
                                                type="password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)}
                                                // autoComplete="current-password"
                                                required
                                                className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <button
                                            type="submit"
                                            onClick={handleLoginUser}
                                            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                        >
                                            Sign in
                                        </button>
                                    </div>
                                </form>

                                <p className="mt-10 text-center text-sm text-gray-500">
                                    Don't have account yet?{' '}
                                    <a href="/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                                        Create One
                                    </a>
                                </p>
                            </div>
                        </div>
                        {/* </div> */}
                    </div>
                </div>
            </div>

        </>
    );
}