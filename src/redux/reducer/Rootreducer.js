import cartReducer from "./Reducer";
import {combineReducers } from 'redux';

const rootRedducer = combineReducers({
     cart: cartReducer,
})

export default rootRedducer;