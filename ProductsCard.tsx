import React from 'react';

// interface ProductProps {
// 	name: string;
// }

export default function ProductCard(props: any) {
	return (
		<>
			<h2>{props.name}</h2>
			<h4>{props.price}</h4>
			<img src={props.image} style={{ height: '100px', width: '100px' }} />
			<h6>{props.category}</h6>
		</>
	);
}
