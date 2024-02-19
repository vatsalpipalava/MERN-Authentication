import axios from 'axios';
import { addUser, removeUser, setUser } from "./Reducer";

export const addNewUser = (newUser, navigate) => async (dispatch) => {
    try {
        const response = await axios.post('/register', newUser);
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
        const response = await axios.post('/login', lgUser);
        dispatch(addUser(response.data));
        window.alert("Login Successfully.");

        navigate("/profile");

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

export const user = () => async (dispatch) => {
    try {
        const response = await axios.get('/profile', {
            withCredentials: true  // Send cookies along with the request
        });
        dispatch(setUser(response.data));
    } catch (error) {
        // navigate('/login');
        console.error('Error fetching items:', error);
        return false;
    }
}

export const userLogout = () => async (dispatch) => {
    try {
        const response = await axios.post('/logout');
        dispatch(removeUser(response.data));
    } catch (error) {
        console.error('Not logout', error);
    }
}