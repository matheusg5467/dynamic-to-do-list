import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	align-items: center;

	background-color: ${({ theme }) => theme.COLORS.WHITE_TASK};

	border: ${({ theme, isNew }) =>
		isNew
			? `5px dashed ${theme.COLORS.GREEN_HIGHLIGHT}`
			: "none"};

	border-radius: 0 2.5rem 2.5rem 4rem;

	margin: 5rem 2rem 5rem 4rem;

	.button-done {
		color: ${({ theme }) => theme.COLORS.GREEN_HIGHLIGHT}
	}
`;
