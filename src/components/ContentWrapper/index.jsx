import { Container } from "./styles";

import { Task } from "../Task";

export function ContentWrapper() {
	return (
	<Container>
		<Task 
			isNew
			placeholder="Nova Tarefa"/>	
		<Task 
			placeholder="Nova Tarefa"/>	

	</Container>
	);
}
