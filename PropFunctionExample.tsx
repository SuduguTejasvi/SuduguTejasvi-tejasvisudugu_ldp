import React from 'react';

interface UserProps {
	name: string;
	age: number;
	place: string;
}

const User: React.FC<UserProps> = ({ name, age, place }) => {
	return (
		<div>
			<h2>Username: {name}</h2>
			<h2>Age: {age}</h2>
			<h2>Place: {place}</h2>
		</div>
	);
};

export default User;
