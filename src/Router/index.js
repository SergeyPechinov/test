import Shop from "../App/Conteiners/Shop/Shop";
import Basket from "../App/Conteiners/Basket/Basket";

export const router = [
	{
		path: '/',
		component: Shop,
		exact: true,
	},
	{
		path: '/basket',
		component: Basket,
	}
];