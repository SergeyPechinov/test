import React from "react";
import "./ProductAdd.scss";
import Input from "../../Components/UI/Input/Input";
import Button from "../../Components/UI/Button/Button";

const ProductAdd = () => {
	return (
			<div className="product-add">
				<Input label="Name"/>
				<Input label="Price"/>

				<Button>Сохранить</Button>
			</div>
	)
};

export default ProductAdd;