import React from 'react';
import Button from '../../atoms/Button/index';

interface Props {
	handleClick: (value: string) => void;
	handleClear: () => void;
	handleCalculate: () => void;
}

const buttons = [
	{ label: '1', value: '1' },
	{ label: '2', value: '2' },
	{ label: '3', value: '3' },
	{ label: '+', value: '+' },
	{ label: '4', value: '4' },
	{ label: '5', value: '5' },
	{ label: '6', value: '6' },
	{ label: '-', value: '-' },
	{ label: '7', value: '7' },
	{ label: '8', value: '8' },
	{ label: '9', value: '9' },
	{ label: '*', value: '*' },
	{ label: '0', value: '0' },
	{ label: '.', value: '.' },
	{ label: '=', value: 'calculate' },
	{ label: '/', value: '/' },
	{ label: 'C', value: 'clear' }
];

function ButtonContainer({ handleClick, handleClear, handleCalculate }: Props) {
	return (
		<div className="button">
			{buttons.map((button) => {
				if (button.value === 'calculate') {
					return <Button key={button.label} onClick={handleCalculate} label={button.label} />;
				}
				if (button.value === 'clear') {
					return <Button key={button.label} onClick={handleClear} label={button.label} />;
				}
				return <Button key={button.label} onClick={() => handleClick(button.value)} label={button.label} />;
			})}
		</div>
	);
}

export default ButtonContainer;
