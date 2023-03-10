import styled from "styled-components";

export const Container = styled.button`
	height: 5rem;
	width: 5rem;

	background-color: ${({ theme }) => theme.COLORS.GREEN_HIGHLIGHT};

	margin: 1.4rem 1.5rem 1.6rem 1.5rem;
	border-radius: 2rem;
	border: none;
`;
