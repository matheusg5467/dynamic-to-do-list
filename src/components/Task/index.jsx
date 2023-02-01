import { Button } from "../Button";

import { Container } from "./styles";

export function Task({ isNew }) {
	return (
		<Container isNew={isNew}>
			<Button />
			<input />
		</Container>
	);
}
