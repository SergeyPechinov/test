import React from "react";
import "./Button.scss";

const Button = props => {

	const copyProps = {...props};

	props.className ? copyProps.className = `button ${props.className}` : copyProps.className = 'button';

	return (
			<button {...copyProps}>
				{props.children}
			</button>
	);
};

export default Button;