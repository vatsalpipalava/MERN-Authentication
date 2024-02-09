import axios from 'axios';
import { addUser } from "./Reducer";

export const addNewUser = (newUser, navigate) => async (dispatch) => {
    try {
        const response = await axios.post('http://localhost:5000/register', newUser);
        dispatch(addUser(response.data));
        window.alert("User registered successfully.");
        navigate("/login");
    } catch (error) {
        if (error.response) {
            // Server responded with a status code other than 2xx
            const { data } = error.response;
            if (data.error) {
                // Display specific error message from the backend
                window.alert(data.error);
            } else {
                window.alert('An error occurred during registration');
            }
        } else if (error.request) {
            // Request was made but no response was received
            window.alert('No response received from server');
        } else {
            // Something happened in setting up the request that triggered an error
            window.alert('Error adding user: ' + error.message);
        }
    }
}

export const loginUser = (lgUser, navigate) => async (dispatch) => {
    try {
        const response = await axios.post('http://localhost:5000/login', lgUser);
        dispatch(addUser(response.data));
        window.alert("Login Successfully.");

        // local storage
        const token = response.data.token;

        // Calculate expiration date 30 days from now
        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 30);

        // Store token and expiration date in an object
        const tokenData = {
            token: token,
            expirationDate: expirationDate.getTime() // Store expiration date as milliseconds
        };

        // Convert tokenData to a JSON string and store it in localStorage
        localStorage.setItem('token', JSON.stringify(tokenData));

        navigate("/");

    } catch (error) {
        if (error.response) {
            // Server responded with a status code other than 2xx
            const { data } = error.response;
            if (data.error) {
                // Display specific error message from the backend
                window.alert(data.error);
            } else {
                window.alert('An error occurred during registration');
            }
        } else if (error.request) {
            // Request was made but no response was received
            window.alert('No response received from server');
        } else {
            // Something happened in setting up the request that triggered an error
            window.alert('Error adding user: ' + error.message);
        }
    }
}