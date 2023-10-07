import { configureStore } from "@reduxjs/toolkit";
import { customReducer } from "./assets/services/Reducers/Reducer";

const store=configureStore({

    reducer:{
      custom:customReducer,
    }
})

export default store;