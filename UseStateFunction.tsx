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

