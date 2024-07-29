import React from 'react';

export default class SalaryUpdate extends React.Component {
	state = {
		name: 'Tejasvi',
		salary: 15000
	};

	constructor(props: any) {
		super(props);
		this.updateSalary = this.updateSalary.bind(this);
	}

	render() {
		return (
			<div>
				<h2>Your name is {this.state.name}</h2>
				<h4>Salary is {this.state.salary}</h4>
				<input type="number" id="salaryupdate" />
				<button onClick={this.updateSalary}>Update</button>
			</div>
		);
	}

	updateSalary() {
		const p = document.getElementById('salaryupdate') as HTMLInputElement;
		if (p) {
			this.setState(
				{
					salary: Number(p.value)
				},
				() => {
					alert(this.state.salary);
				}
			);
		}
	}
}
