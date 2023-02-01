import { Container } from "./styles";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Sidebar } from "../../components/Sidebar";
import { Task } from "../../components/Task";
import { ContentWrapper } from "../../components/ContentWrapper";

export function MainPage() {
	return (
		<Container>
			<Header />
			<ContentWrapper />
			<Sidebar />
		</Container>
	);
}
