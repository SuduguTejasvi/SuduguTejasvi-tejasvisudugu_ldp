import React from 'react';
import Button from '../../atoms/Button/index';

interface Props {
	handleClick: (value: string) => void;
	handleClear: () => void;
	handleCalculate: () => void;
}

function ButtonContainer({ handleClick, handleClear, handleCalculate }: Props) {
	return (
		<div className="button">
			<Button onClick={() => handleClick('1')} label="1" />
			<Button onClick={() => handleClick('2')} label="2" />
			<Button onClick={() => handleClick('3')} label="3" />
			<Button onClick={() => handleClick('+')} label="+" />
			<Button onClick={() => handleClick('4')} label="4" />
			<Button onClick={() => handleClick('5')} label="5" />
			<Button onClick={() => handleClick('6')} label="6" />
			<Button onClick={() => handleClick('-')} label="-" />
			<Button onClick={() => handleClick('7')} label="7" />
			<Button onClick={() => handleClick('8')} label="8" />
			<Button onClick={() => handleClick('9')} label="9" />
			<Button onClick={() => handleClick('*')} label="*" />
			<Button onClick={() => handleClick('0')} label="0" />
			<Button onClick={() => handleClick('.')} label="." />
			<Button onClick={handleCalculate} label="=" />
			<Button onClick={() => handleClick('/')} label="/" />
			<Button onClick={handleClear} label="C" />
		</div>
	);
}

export default ButtonContainer;
