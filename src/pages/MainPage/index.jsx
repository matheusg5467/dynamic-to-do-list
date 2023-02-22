import { Container } from "./styles";

import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { ToDoList } from "../../components/ToDoList";

export function MainPage() {
	return (
		<Container>
			<Header />
			<ToDoList />
			<Sidebar />
		</Container>
	);
}
