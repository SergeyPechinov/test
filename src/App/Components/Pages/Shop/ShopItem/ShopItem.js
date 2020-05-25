import React from "react";
import "./ShopItem.scss";
import IconClose from "../../../../Icons/Close/Close";
import Button from "../../../UI/Button/Button";
import {useDispatch} from "react-redux";
import {removeProduct} from "../../../../../Redux/Actions/products";

const ShopItem = props => {
	const dispatch = useDispatch();

	const clickRemoveProduct = id => {
		dispatch(removeProduct(id));
	};

	return (
			<div className="shop-item">
				<div className="shop-item__top">
					<p className="shop-item__price">{`${props.product.price} USD`}</p>
					<button className="shop-item__button-del" onClick={() => clickRemoveProduct(props.product.id)}>
						<IconClose/>
					</button>
				</div>
				<p className="shop-item__name">{props.product.name}</p>

				<Button className="shop-item__button-add">Add</Button>
			</div>
	)
};

export default ShopItem;