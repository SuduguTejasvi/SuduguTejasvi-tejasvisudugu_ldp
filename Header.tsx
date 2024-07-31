import React from 'react';
import logo from '../logo.svg';

const level: string[] = ['Beginner', 'Intermediate', 'Advanced'];

function getRandom(max: number): number {
	return Math.floor(Math.random() * (max + 1));
}

const grade: string = level[getRandom(2)];

export default function Header() {
	return (
		<header className="App-header">
			<img src={logo} className="App-logo" alt="logo" />
			<p>
				Edit <code>src/App.tsx</code> and save to reload.
			</p>
			<a
				className="App-link"
				href="https://reactjs.org"
				target="_blank"
				rel="noopener noreferrer"
			>
				Learn React - {grade}
			</a>
		</header>
	);
}
