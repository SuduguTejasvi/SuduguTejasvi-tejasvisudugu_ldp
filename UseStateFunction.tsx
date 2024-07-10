import React, { useState } from 'react';

export default function ChangePerson() {
	const [person, UpdatePerson] = useState({
		name: 'Tejasvi',
		salary: 23456,
		Education: 'BTECH'
	});
	return (
		<div>
			<h1>Name:{person.name}</h1>
			<h2>Salary: {person.salary}</h2>
			<h4>Education:{person.Education}</h4>

			<input type="number" id="salary" />
			<br />
			<input type="text" id="Education" />
			<br />
			<button
				onClick={() => {
					const sal = document.getElementById('salary') as HTMLInputElement;
					const edu = document.getElementById('Education') as HTMLInputElement;
					UpdatePerson({
						...person,
						salary: Number(sal.value),
						Education: edu.value
					});
				}}
			>
				update
			</button>
		</div>
	);
}

// import React from 'react';
// import { useState } from 'react';

// export default function Count() {
// 	let [counter, updateCounter] = useState(0);
// 	return (
// 		<div>
// 			<h2>Counter - {counter}</h2>
// 			<button onClick={() => updateCounter(++counter)}>Increment</button>
// 		</div>
// 	);
// }
