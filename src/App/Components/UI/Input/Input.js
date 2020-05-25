import React from "react";
import "./Input.scss";

const Input = props => {
	const copyProps = {...props};
	delete copyProps['id'];
	delete copyProps['label'];

	props.className ? copyProps.className = `input__item ${props.className}` : copyProps.className = 'input__item';

	return (
		<div className="input">
			<label htmlFor={props.id} className="input__label">{props.label}</label>
			<input type="text" id={props.id} {...copyProps}/>
		</div>
	);
};

export default Input;