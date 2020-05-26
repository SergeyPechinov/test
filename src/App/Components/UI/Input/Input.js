import React from "react";
import "./Input.scss";

const Input = props => {
	const copyProps = {...props};
	delete copyProps['id'];
	delete copyProps['label'];
	delete copyProps['error'];

	props.className ? copyProps.className = `input__item ${props.className}` : copyProps.className = 'input__item';
	if (props.error) copyProps.className += ' error';

	return (
		<div className="input">
			<label htmlFor={props.id} className="input__label">{props.label}</label>
			<input type="text" id={props.id} {...copyProps}/>
		</div>
	);
};

export default Input;