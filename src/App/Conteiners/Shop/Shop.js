import React from "react";
import "./Shop.scss";
import ShopItem from "../../Components/Pages/Shop/ShopItem/ShopItem";
import ShopItemAdd from "../../Components/Pages/Shop/ShopItemAdd/ShopItemAdd";

const Shop = props => {
	return(
			<div className="shop">
				<ShopItem/>
				<ShopItem/>
				<ShopItem/>
				<ShopItem/>
				<ShopItem/>
				<ShopItem/>
				<ShopItem/>
				<ShopItem/>
				<ShopItemAdd/>
			</div>
	)
};

export default Shop;