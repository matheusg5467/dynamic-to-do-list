import { FiPlus } from "react-icons/fi";
import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	align-items: center;

	height: 8rem;
	width: 99rem;

	background-color: ${({ theme }) => theme.COLORS.WHITE_TASK};

	border: ${({ theme, isNew }) =>
		isNew
			? `5px dashed ${theme.COLORS.GREEN_HIGHLIGHT}`
			: "none"};

	border-radius: 0 2.5rem 2.5rem 4rem;

	margin: 5rem 2rem 5rem 4rem;

	> #add-button {
		border: none; 
		background: none;		
	}

	> input {
		height: auto;
		width: 84rem;

		display: flex;
		align-items: center;

		background-color: transparent;
		color: ${({ theme }) => theme.COLORS.GREEN_TEXT};
		border: none;

		margin-top: 1.3rem;
		margin-bottom: 0.6rem;

		padding: 0 1.5rem;
	}
`;

export const AddTask = styled.button`
	
	border: none;
	background: none;
	margin: 1.4rem 1.5rem 1.6rem 0.5rem;
	border-radius: 2rem;

	> svg {
		color: #656565;
		font-size: 6rem;

	} 	
`
