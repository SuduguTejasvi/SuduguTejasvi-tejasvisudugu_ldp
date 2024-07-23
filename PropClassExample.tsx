import React from 'react';

interface UserProps {
	name: string;
	age: number;
	place: string;
}
class User extends React.Component<UserProps> {
	constructor(props: UserProps) {
		super(props);
	}

	render() {
		return (
			<div>
				<h2>Username: {this.props.name}</h2>
				<h2>Age: {this.props.age}</h2>
				<h2>Place: {this.props.place}</h2>
			</div>
		);
	}
}

export default User;
