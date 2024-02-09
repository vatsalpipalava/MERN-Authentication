export const isLoggedIn = () => {
    // Retrieve tokenData from localStorage
    const tokenDataString = localStorage.getItem('token');

    if (tokenDataString) {
        // Parse tokenData JSON string to an object
        const tokenData = JSON.parse(tokenDataString);

        // Check if the token has expired
        const now = new Date().getTime();
        if (now > tokenData.expirationDate) {
            // Token has expired, remove it from localStorage
            localStorage.removeItem('token');
        } else {
            // Token is still valid, you can use it
            const token = tokenData.token;
            console.log("Token:", token);
       
        }
    }

    return tokenDataString !== null;


    // if (token) {
    //     console.log(token);
    // } else {
    //     console.log("session expire");
    // }
    // return token !== null; // Returns true if token exists, false otherwise
};
