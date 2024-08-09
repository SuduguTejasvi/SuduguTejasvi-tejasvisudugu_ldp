// components/Calculator.js

import React, { useState } from 'react';
import Display from '../../molecules/Display/index';
import ButtonsContainer from '../ButtonContainer/index';

function Calculator() {
	const [input, setInput] = useState<string>('');
	const [result, setResult] = useState<string | number>('');

	const handleClick = (value: string | number) => {
		setInput(prevInput => prevInput + value.toString());
	};

	const handleClear = () => {
		setInput('');
		setResult('');
	};

	const handleCalculate = () => {
		try {
			setResult(eval(input));
		} catch (error) {
			setResult('Error');
		}
	};

	return (
		<div className="calculator">
			<Display input={input} result={result} />
			<ButtonsContainer
				handleClick={handleClick}
				handleClear={handleClear}
				handleCalculate={handleCalculate}
			/>
		</div>
	);
}

export default Calculator;
