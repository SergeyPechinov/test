import React from "react";
import "./Input.scss";

const Input = props => {
	const copyProps = {...props};
	delete copyProps['id'];
	delete copyProps['label'];

	props.className ? copyProps.className = `input ${props.className}` : copyProps.className = 'input';

	return (
		<div className="input">
			<label htmlFor={props.id} className="input__label">{props.label}</label>
			<input type="text" className="input__item" id={props.id}/>
		</div>
	);
};

export default Input;