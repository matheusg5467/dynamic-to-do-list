import styled from "styled-components";

export const Container = styled.div`
	grid-area: content;
	background-color: ${({ theme }) =>
		theme.COLORS.BLACK_CONTENT_WRAPPER};
	margin: 2rem 5.5rem 4.4rem 3.5rem;
`;
