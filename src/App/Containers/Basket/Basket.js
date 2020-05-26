import React from "react";
import "./Basket.scss";
import BasketList from "../../Components/Pages/Basket/BasketList/BasketList";
import {useSelector} from "react-redux";

const Basket = props => {
	const basket = useSelector(state => state.basket);

	return (
			<div className="basket">
				<p className="basket__title">There are {basket.countProducts} products in your cart</p>

				<BasketList list={basket.list}/>

				<p className="basket__total">Total price: <span className="basket__total-price">{basket.sum} USD</span></p>
			</div>
	)
};

export default Basket;