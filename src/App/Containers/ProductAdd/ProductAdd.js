import React, {useEffect, useState} from "react";
import "./ProductAdd.scss";
import Input from "../../Components/UI/Input/Input";
import Button from "../../Components/UI/Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {addProduct} from "../../../Redux/Actions/products";
import {useHistory} from "react-router";

const ProductAdd = () => {
	const [name, setName] = useState('');
	const [price, setPrice] = useState('');

	const handlerName = event => {
		setName(event.target.value);
	};

	const handlerPrice = event => {
		const value = event.target.value;

		if (!isNaN(Number(value))) {
			setPrice(value);
		}
	};

	//если длина меньше 1 символа, то кнопка в disabled
	const [filled, setFilled] = useState(true);

	useEffect(() => {
		name.length > 0 && price.length > 0 ? setFilled(false) : setFilled(true);
	}, [name, price, filled]);

	const dispatch = useDispatch();
	const history = useHistory();
	const productLastId = useSelector(state => state.productsList.lastId);

	const clickAddProduct = () => {
		dispatch(addProduct({
			id: Number(productLastId) + 1,
			name,
			price
		}));

		//редирект в магазин
		history.push('/');
	};

	return (
			<div className="product-add">
				<Input label="Name" value={name} onChange={handlerName} id="input-name"/>
				<Input label="Price" value={price} onChange={handlerPrice} id="input-price"/>

				<Button disabled={filled} onClick={clickAddProduct}>Сохранить</Button>
			</div>
	)
};

export default ProductAdd;