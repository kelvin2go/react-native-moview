import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import movies from './movies';
import tv from './tv';
const reducer = combineReducers({
    movies,
    tv,
})

const store = configureStore({
    reducer,
})

export default store;