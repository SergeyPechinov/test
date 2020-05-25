import {ADD_PRODUCT, REMOVE_PRODUCT} from "../Const/products";

export const addProduct = product => {
	return {
		type: ADD_PRODUCT,
		payload: product
	}
};

export const removeProduct = id => {
	return {
		type: REMOVE_PRODUCT,
		payload: id
	}
};