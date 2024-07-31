import React from 'react';

interface Props {
	onClick: () => void;
	label: string | number;
}

function Button({ onClick, label }: Props) {
	return <button onClick={onClick}>{label}</button>;
}

export default Button;
