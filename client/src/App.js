// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Signup from "./pages/Singup";
// import Profile from "./pages/profile";

// export default function App() {

//   return (
//     <div>
//       <Router>
//         <Routes>
//           <Route path="/" exact element={<Home />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Signup />} />
//           <Route path="/profile" element={<Profile />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }


import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Singup";
import Profile from "./pages/profile";
import Loader from "./components/Loader"; // Assuming Loader.js is in the same directory as App.js

export default function App() {
  const [loading, setLoading] = useState(true);
  // const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800); // Simulating a loading time of 1 second, you can adjust this as needed
    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <Router>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Signup />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}
