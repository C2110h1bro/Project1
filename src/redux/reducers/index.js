import { combineReducers } from "redux";
import cartReducer from "./cart";
import counterReducer from "./counter";

const allReducer = combineReducers({
    counter: counterReducer,
    cart: cartReducer
})

export default allReducer;