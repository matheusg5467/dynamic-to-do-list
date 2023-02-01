import { Container } from "./styles";

import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
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
