const initialState = {
	list: require('../../Jsons/basket.json').basketList,
	countProducts: require('../../Jsons/basket.json').countProducts,
};

export const reducerBasket = (state = initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};