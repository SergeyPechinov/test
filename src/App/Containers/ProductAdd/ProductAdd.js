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

	//если длина значения меньше 1, то добавлется error
	const [filledName, setFilledName] = useState(false);
	const handlerName = event => {
		const value = event.target.value;
		value.length > 0 ? setFilledName(true) : setFilledName(false);

		setName(value);
	};

	const [filledPrice, setFilledPrice] = useState(false);
	const handlerPrice = event => {
		const value = event.target.value;

		value.length > 0 ? setFilledPrice(true) : setFilledPrice(false);

		if (!isNaN(Number(value))) {
			setPrice(value);
		}
	};

	//если длина меньше 1 символа, то кнопка в disabled
	const [filledForm, setFilledForm] = useState(true);

	useEffect(() => {
		name.length > 0 && price.length > 0 ? setFilledForm(false) : setFilledForm(true);
	}, [name, price, filledForm]);

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
				<Input label="Name" value={name} onChange={handlerName} error={!filledName} id="input-name"/>
				<Input label="Price" value={price} onChange={handlerPrice} error={!filledPrice} id="input-price"/>

				<Button disabled={filledForm} onClick={clickAddProduct}>Сохранить</Button>
			</div>
	)
};

export default ProductAdd;