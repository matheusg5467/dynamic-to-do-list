import styled from "styled-components";

export const Container = styled.div`
	grid-area: content;
	background-color: ${({ theme }) =>
		theme.COLORS.BLACK_CONTENT_WRAPPER};
	margin: 2rem 5.5rem 4.4rem 3.5rem;
`;

export const NewTask = styled.form`
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

export const List = styled.li`
	list-style: none;

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
