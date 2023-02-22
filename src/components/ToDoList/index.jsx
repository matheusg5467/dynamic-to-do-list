import React, { useState } from "react";

import { Container } from "./styles";

import { Task } from "./styles";

import { List } from "./styles";

import { Button } from "../Button";

import { AddButton } from "../AddButton";

export function ToDoList() {
	
	const [input, setInput] = useState("");
	const [todoList, setTodoList] = useState([]);

	const handleAddTask = (e) => {
		e.preventDefault();
		const id = todoList.length + 1;
		setTodoList((prev) => [
			...prev,
			{
				id: id,
				task: input,
				complete: false,
			}
		]);
		setInput("");
	};

	const handleComplete = (id) => {
		let list = todoList.map((task) => {
		  	let item = {};
		  	if (task.id == id) {			
				item = { ...task, complete: true };
			} else {
				item = { ...task }
			};
			return item;
		});
		setTodoList(list);
	};
	
	return (
		<Container>
			<Task isNew onSubmit={handleAddTask}>			
				<AddButton/>			
				<input value={input} placeholder='New Task' onInput={(e) => {
					setInput(e.target.value)
					}
				}/>
			</Task>

			<div>
				<ul>
					{todoList.map((todo) => {
						return (
							<List
								id = {todo.id}
								complete = {todo.complete}
								onClick = {() => {handleComplete(todo.id)}}
							>
								{todo.task}
							</List>
						);
					})}
				</ul>
			</div>
		</Container>
	);
}
