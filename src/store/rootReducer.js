import { combineReducers } from "redux";
import cart from "./reducers/cart";
import inventory from "./reducers/inventory";

const rootReducer = combineReducers({ cart, inventory });

export default rootReducer;
