import React from "react";
import "./Header.scss";
import {NavLink} from "react-router-dom";
import IconBasket from "../../Icons/Basket/Basket";
import {useSelector} from "react-redux";

const Header = () => {
	const basketCountProducts = useSelector(state => state.basket.countProducts);
	return (
			<header className="header">
				<nav className="header__nav">
					<NavLink to={"/"} className={"header__nav-item"}>Shop</NavLink>
					<NavLink to={"/basket"} className={"header__nav-item nav-item-basket"}>
						<div className="nav-item-basket">
							<IconBasket/>
							{basketCountProducts ?
							<p className="nav-item-basket__counter">{basketCountProducts}</p>
							: null}
						</div>
					</NavLink>
				</nav>
			</header>
	)
};

export default Header;