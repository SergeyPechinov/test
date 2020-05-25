import {combineReducers} from "redux";
import {reducerProductsList} from "./products";

const appReducer = combineReducers({
	productsList: reducerProductsList,
});

export const rootReducer = (state, action) => {
	return appReducer(state, action);
};