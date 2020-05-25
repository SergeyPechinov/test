import React, {useEffect, useState} from "react";
import "./ProductAdd.scss";
import Input from "../../Components/UI/Input/Input";
import Button from "../../Components/UI/Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {addProduct} from "../../../Redux/Actions/products";
import {useHistory} from "react-router";

const ProductAdd = () => {
	const [name, setName] = useState('123');
	const [price, setPrice] = useState('');

	const handlerName = event => {
		setName(event.target.value);
	};

	const handlerPrice = event => {
		setPrice(event.target.value);
	};

	//if length less 1 symbol then button block
	const [buttonDisabled, setButtonDisabled] = useState(true);

	useEffect(() => {
		name.length > 0 && price.length > 0 ? setButtonDisabled(false) : setButtonDisabled(true);
	}, [name, price, buttonDisabled]);

	const dispatch = useDispatch();
	const history = useHistory();
	const productLastId = useSelector(state => state.productsList.lastId);

	const clickAddProduct = () => {
		dispatch(addProduct({
			id: Number(productLastId) + 1,
			name,
			price
		}));

		//redirect to shop
		history.push('/');
	};

	return (
			<div className="product-add">
				<Input label="Name" value={name} onChange={handlerName} id="input-name"/>
				<Input label="Price" value={price} onChange={handlerPrice} id="input-price"/>

				<Button disabled={buttonDisabled} onClick={clickAddProduct}>Сохранить</Button>
			</div>
	)
};

export default ProductAdd;