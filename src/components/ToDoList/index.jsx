import React, { useState } from "react";

import { Container } from "./styles";

import { NewTask } from "./styles";

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
			<NewTask isNew onSubmit={handleAddTask}>			
				<AddButton/>			
				<input value={input} placeholder='New Task' onInput={(e) => {
					setInput(e.target.value)
					}
				}/>
			</NewTask>

			<div>
				<ul>
					{todoList.map((todo) => {
						return (
							<List
								id = {todo.id}
								key = {todo.id}
								complete = {todo.complete}
								onClick = {() => {handleComplete(todo.id)}}
							>
								<Button/>
								<input value = {todo.task} disabled/>
							</List>
						);
					})}
				</ul>
			</div>
		</Container>
	);
}
