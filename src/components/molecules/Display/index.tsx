import React from 'react';

interface Props {
	input: String;
	result: String | number;
}

function Display({ input, result }: Props) {
	return (
		<div className="display">
			<div className="input">{input}</div>
			<div className="result">{result}</div>
		</div>
	);
}

export default Display;
