import React from "react";
import "./../ShopItem/ShopItem.scss"
import "./ShopItemAdd.scss";
import IconPlus from "../../../../Icons/PlusCircle/PlusCircle";
import {Link} from "react-router-dom";

const ShopItemAdd = () => {
	return (
			<div className="shop-item shop-item-add">
				<div className="shop-item-add__button-wrapper">
					<Link to={"product-add"} className="shop-item-add__button">
						<IconPlus/>
					</Link>
				</div>
			</div>
	)
};

export default ShopItemAdd;