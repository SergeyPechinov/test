import {ADD_ITEM_BASKET, REMOVE_ITEM_BASKET, UPDATE_ITEM_BASKET} from "../Const/basket";

export const addBasket = product => {
	return {
		type: ADD_ITEM_BASKET,
		payload: product,
	}
};

export const updateItemBasket = data => {
	return {
		type: UPDATE_ITEM_BASKET,
		payload: data,
	}
};

export const removeItemBasket = id => {
	return {
		type: REMOVE_ITEM_BASKET,
		payload: id,
	}
};