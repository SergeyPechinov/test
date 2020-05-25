import React from "react";
import "./Header.scss";
import {NavLink} from "react-router-dom";
import IconBasket from "../../Icons/Basket/Basket";

const Header = props => {
	return (
			<header className="header">
				<nav className="header__nav">
					<NavLink to={"/"} className={"header__nav-item"}>Магазин</NavLink>
					<NavLink to={"/basket"} className={"header__nav-item nav-item-basket"}>
						<div className="nav-item-basket">
							<IconBasket/>
							<p className="nav-item-basket__counter">4</p>
						</div>
					</NavLink>
				</nav>
			</header>
	)
};

export default Header;