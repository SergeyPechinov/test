import React from "react";
import "./Shop.scss";
import ShopItem from "../../Components/Pages/Shop/ShopItem/ShopItem";
import ShopItemAdd from "../../Components/Pages/Shop/ShopItemAdd/ShopItemAdd";
import {useSelector} from "react-redux";

const Shop = props => {
	const products = useSelector(state => state.productsList.list);

	return (
			<div className="shop">
				{products.map((product, productIndex) => {
					return (
							<ShopItem product={product} key={productIndex}/>
					);
				})}

				<ShopItemAdd/>
			</div>
	)
};

export default Shop;