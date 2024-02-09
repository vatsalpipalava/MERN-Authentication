// import { configureStore } from "@reduxjs/toolkit";
// import Reducer from "./reducer/Reducer";

// const rootReducer = {
//     users: Reducer
// };

// const store = configureStore({
//     reducer: rootReducer
// });

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import Reducer from "./reducer/Reducer";

const rootReducer = {
    user: Reducer // Update to match the slice name
};

const store = configureStore({
    reducer: rootReducer
});

export default store;
