import {ADD_ITEM_BASKET, REMOVE_ITEM_BASKET, UPDATE_ITEM_BASKET} from "../Const/basket";

const initialState = {
	list: [],
	countProducts: 0,
	sum: 0,
};

export const reducerBasket = (state = initialState, action) => {
	switch (action.type) {
		case ADD_ITEM_BASKET: {
			const list = JSON.parse(JSON.stringify(state.list));

			//если уже есть продукт в корзине, то плюс 1 иначе добавляем
			const itemIndex = state.list.findIndex(index => index.id === action.payload.id);

			if (itemIndex >= 0) {
				list[itemIndex].count += 1;
			} else {
				action.payload.count = 1;
				list.splice(0, 0, action.payload);
			}

			return {
				...state,
				list,
				countProducts: state.countProducts + 1,
				sum: state.sum + Number(action.payload.price)
			}
		}
		case UPDATE_ITEM_BASKET: {
			const list = JSON.parse(JSON.stringify(state.list));
			const itemIndex = state.list.findIndex(index => index.id === action.payload.id);
			let countProducts = state.countProducts;

			let sum = state.sum;
			if (action.payload.event === "plus") {
				list[itemIndex].count += 1;
				countProducts++;
				sum += Number(state.list[itemIndex].price);
			} else {
				list[itemIndex].count -= 1;
				countProducts--;
				sum -= Number(state.list[itemIndex].price);
			}

			return {
				...state,
				list,
				countProducts,
				sum: sum
			}
		}
		case REMOVE_ITEM_BASKET: {
			const list = JSON.parse(JSON.stringify(state.list));

			const itemIndex = state.list.findIndex(index => index.id === action.payload);

			let sum = state.sum;
			//кол-во эл. умножаем на стоимость
			if (itemIndex >= 0) {
				const count = state.list[itemIndex].count;
				const price = state.list[itemIndex].price;
				sum -= count * price;
			}

			//удаляет элемент
			list.splice(itemIndex, 1);

			//считает количество элементов
			let countProducts = 0;
			list.forEach(item => {
				countProducts += item.count;
			});

			return {
				...state,
				list,
				countProducts,
				sum
			}
		}
		default:
			return state;
	}
};