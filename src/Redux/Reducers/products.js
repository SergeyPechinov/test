import {ADD_PRODUCT, REMOVE_PRODUCT} from "../Const/products";

const initialState = {
		list: require('../../Jsons/productsList.json').list,
		lastId: require('../../Jsons/productsList.json').lastId,
};

export const reducerProductsList = (state = initialState, action) => {
	switch (action.type) {
		case ADD_PRODUCT: {
			const newList = JSON.parse(JSON.stringify(state.list));

			//вставляет в начало массива
			newList.splice(0, 0, action.payload);

			return {
				...state,
				list: newList,
				lastId: action.payload.id
			};
		}
		case REMOVE_PRODUCT: {
			const newList = JSON.parse(JSON.stringify(state.list));
			newList.splice(newList.findIndex(item => item.id === action.payload), 1);

			return {
				...state,
				list: newList
			}
		}
		default:
			return state;
	}
};