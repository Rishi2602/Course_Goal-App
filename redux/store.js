import { configureStore, createSlice } from '@reduxjs/toolkit';
import goalReducer from './goalReducer';

const Goalstore=configureStore({
    reducer:{
        goal:goalReducer,
    },
}
);

export default Goalstore;
