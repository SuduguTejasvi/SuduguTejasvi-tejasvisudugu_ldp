import React, { useState, useEffect } from 'react';

function Container() {
	const [show, setShow] = useState(true);
	const [count, setCount] = useState(0);

	const delHeader = (): void => {
		setShow(false);
	};

	const incrementCount = (): void => {
		setCount(prevCount => prevCount + 1);
	};

	useEffect(() => {
		console.log('componentDidMount');
	}, []);

	useEffect(() => {
		console.log('componentDidUpdate');
	});

	return (
		<div>
			<center>
				{show && <Child />}
				<button onClick={delHeader}>Delete Product</button>
				<h3>Count: {count}</h3>
				<button onClick={incrementCount}>Increment Count</button>
			</center>
		</div>
	);
}

function Child() {
	useEffect(() => {
		return () => {
			console.log('componentWillUnmount');
		};
	}, []);

	return <div>Shoes</div>;
}

export default Container;
