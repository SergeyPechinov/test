import React from "react";
import "./BasketList.scss";
import IconMinus from "../../../../Icons/Minus/Minus";
import IconPlus from "../../../../Icons/Plus/Plus";
import IconTrash from "../../../../Icons/Trash/Trash";
import {useDispatch} from "react-redux";
import {removeItemBasket, updateItemBasket} from "../../../../../Redux/Actions/basket";

const BasketList = props => {
	const dispatch = useDispatch();

	const clickUpdateCountItem = (id, event) => {
		dispatch(updateItemBasket({id, event}))
	};

	const clickDeleteItem = id => {
		dispatch(removeItemBasket(id));
	};

	return (
			<ul className="basket-list">
				{props.list.map((item, itemIndex) => {
					return (
							<li className="basket-list__item" key={itemIndex}>
								<p className="basket-list__item-name">{item.name}</p>

								<div className="basket-list__item-count-wrapper">
									<button className="basket-list__item-button" onClick={() => clickUpdateCountItem(item.id, 'minus')}
									        disabled={item.count <= 1}>
										<IconMinus/>
									</button>
									<p className="basket-list__item-count">{item.count}</p>
									<button className="basket-list__item-button" onClick={() => clickUpdateCountItem(item.id, 'plus')}>
										<IconPlus/>
									</button>
								</div>

								<p className="basket-list__item-price">{item.price} USD</p>

								<div className="basket-list__item-button-delete-wrapper">
									<button className="basket-list__item-button-delete" onClick={() => clickDeleteItem(item.id)}>
										<IconTrash/>
									</button>
								</div>
							</li>
					)
				})}
			</ul>
	)
};

export default BasketList;