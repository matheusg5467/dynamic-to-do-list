import styled from "styled-components";

export const Container = styled.header`
	grid-area: header;
	background-color: ${({ theme }) => theme.COLORS.GREEN_HEADER};

	height: 16rem;
	width: 100%;

	padding: 4.4rem 0 4.6rem 5rem;

	> h1 {
		color: ${({ theme }) => theme.COLORS.GREEN_TITLE};
		text-align: left;
		line-height: 7rem;
	}
`;
