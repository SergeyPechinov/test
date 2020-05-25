import React from "react";
import "./Basket.scss";
import IconPlus from "../../Icons/Plus/Plus";
import IconMinus from "../../Icons/Minus/Minus";
import IconTrash from "../../Icons/Trash/Trash";

const Basket = props => {
	return (
			<div className="basket">
				<p className="basket__title">There are 3 products in your cart</p>

				<ul className="basket-list">
					<li className="basket-list__item">
						<p className="basket-list__item-name">Apple Watch Series</p>

						<div className="basket-list__item-count-wrapper">
							<button className="basket-list__item-button">
								<IconMinus/>
							</button>
							<p className="basket-list__item-count">32</p>
							<button className="basket-list__item-button">
								<IconPlus/>
							</button>
						</div>

						<p className="basket-list__item-price">3292 USD</p>

						<div className="basket-list__item-button-delete-wrapper">
							<button className="basket-list__item-button-delete">
								<IconTrash/>
							</button>
						</div>
					</li>
					<li className="basket-list__item">
						<p className="basket-list__item-name">Apple Watch Series 1 12 12 dasdad as dasd asd</p>

						<div className="basket-list__item-count-wrapper">
							<button className="basket-list__item-button">
								<IconMinus/>
							</button>
							<p className="basket-list__item-count">32</p>
							<button className="basket-list__item-button">
								<IconPlus/>
							</button>
						</div>

						<p className="basket-list__item-price">329 USD</p>

						<div className="basket-list__item-button-delete-wrapper">
							<button className="basket-list__item-button-delete">
								<IconTrash/>
							</button>
						</div>
					</li>
				</ul>

				<p className="basket__total">Total price: <span className="basket__total-price">3621 USD</span></p>
			</div>
	)
};

export default Basket;