import { Button } from "../Button";

import { Container, AddTask } from "./styles";

import { FiPlus } from "react-icons/fi"


export function Task({ isNew = 0 }) {
	return (
		<Container isNew={isNew}>
			{isNew ? (
					<AddTask>
						<FiPlus />
					</AddTask>
			) : (
				<Button />
			)}
			<input />
		</Container>
	);
}
