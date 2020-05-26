import {ADD_PRODUCT, REMOVE_PRODUCT} from "../Const/products";

const initialState = {
		list: require('../../Jsons/productsList.json').list,
		lastId: require('../../Jsons/productsList.json').lastId,
};

export const reducerProductsList = (state = initialState, action) => {
	switch (action.type) {
		case ADD_PRODUCT: {
			const list = JSON.parse(JSON.stringify(state.list));

			//вставляет в начало массива
			list.splice(0, 0, action.payload);

			return {
				...state,
				list,
				lastId: action.payload.id
			};
		}
		case REMOVE_PRODUCT: {
			const list = JSON.parse(JSON.stringify(state.list));

			//удаляет из массива
			list.splice(list.findIndex(item => item.id === action.payload), 1);

			return {
				...state,
				list
			}
		}
		default:
			return state;
	}
};