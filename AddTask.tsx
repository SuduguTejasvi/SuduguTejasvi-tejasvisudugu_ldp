import React, { useState } from 'react';
import Search from './Search';

function AddTask() {
	const [Todos, UpdateTodos] = useState<string[]>(['Task1', 'Task2']);

	const addNew = (task: string) => {
		UpdateTodos([...Todos, task]);
	};

	return (
		<div>
			<Search add={addNew} />
			<ul>
				{Todos.map(task => (
					<li key={task}>{task}</li>
				))}
			</ul>
		</div>
	);
}
export default AddTask;
