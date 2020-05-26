import Shop from "../App/Containers/Shop/Shop";
import Basket from "../App/Containers/Basket/Basket";
import ProductAdd from "../App/Containers/ProductAdd/ProductAdd";

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