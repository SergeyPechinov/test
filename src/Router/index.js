import Shop from "../App/Conteiners/Shop/Shop";
import Basket from "../App/Conteiners/Basket/Basket";
import ProductAdd from "../App/Conteiners/ProductAdd/ProductAdd";

export const router = [
	{
		path: '/',
		component: Shop,
		exact: true,
	},
	{
		path: '/basket',
		component: Basket,
	},
	{
		path: '/product-add',
		component: ProductAdd,
	}
];