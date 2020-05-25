import {combineReducers} from "redux";
import {reducerProductsList} from "./products";
import {reducerBasket} from "./basket";

const appReducer = combineReducers({
	productsList: reducerProductsList,
	basket: reducerBasket,
});

export const rootReducer = (state, action) => {
	return appReducer(state, action);
};