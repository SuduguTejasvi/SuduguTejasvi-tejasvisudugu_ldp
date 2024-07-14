import React from 'react';

interface ContainerState {
	show: boolean;
	count: number;
}

class Container extends React.Component<{}, ContainerState> {
	constructor(props: {}) {
		super(props);
		this.state = {
			show: true,
			count: 0
		};
	}

	delHeader = (): void => {
		this.setState({ show: false });
	};

	incrementCount = (): void => {
		this.setState(prevState => ({ count: prevState.count + 1 }));
	};

	componentDidMount(): void {
		console.log('componentDidMount');
	}

	componentDidUpdate(): void {
		console.log('componentDidUpdate');
	}

	render() {
		let myheader: JSX.Element | null = null;
		if (this.state.show) {
			myheader = <Child />;
		}
		return (
			<div>
				<center>
					{myheader}
					<button onClick={this.delHeader}>Delete Product</button>
					<h3>Count: {this.state.count}</h3>
					<button onClick={this.incrementCount}>Increment Count</button>
				</center>
			</div>
		);
	}
}

class Child extends React.Component {
	componentWillUnmount(): void {
		console.log('componentWillUnmount');
	}

	render() {
		return <div>Shoes</div>;
	}
}

export default Container;
