import React from "react";
import "./../ShopItem/ShopItem.scss"
import "./ShopItemAdd.scss";
import IconPlus from "../../../../Icons/PlusCircle/PlusCircle";

const ShopItemAdd = props => {
	return (
			<div className="shop-item shop-item-add">
				<div className="shop-item-add__button-wrapper">
					<button className="shop-item-add__button">
						<IconPlus/>
					</button>
				</div>
			</div>
	)
};

export default ShopItemAdd;