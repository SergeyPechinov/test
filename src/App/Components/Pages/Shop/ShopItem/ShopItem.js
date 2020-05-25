import React from "react";
import "./ShopItem.scss";
import IconClose from "../../../../Icons/Close/Close";
import Button from "../../../UI/Button/Button";

const ShopItem = props => {
	return (
			<div className="shop-item">
				<div className="shop-item__top">
					<p className="shop-item__price">100 USD</p>
					<button className="shop-item__button-del">
						<IconClose/>
					</button>
				</div>
				<p className="shop-item__name">Samsung Galaxy S1</p>

				<Button className="shop-item__button-add">Добавить</Button>
			</div>
	)
};

export default ShopItem;