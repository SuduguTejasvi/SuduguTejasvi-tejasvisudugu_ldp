import React, { useState } from 'react';

interface Props {
	add: (task: string) => void;
}

function Search(props: Props) {
	const [newTask, setNewTask] = useState('');

	return (
		<div>
			<input
				value={newTask}
				onChange={e => {
					setNewTask(e.target.value);
				}}
			/>
			<button
				onClick={() => {
					props.add(newTask);
				}}
			>
				Add Task
			</button>
		</div>
	);
}

export default Search;
