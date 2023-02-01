import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    background-color: none;
    color: ${({ theme }) => theme.COLORS.GREEN_TEXT};

    margin-top: 1.3rem;
    margin-bottom: 0.6rem;
`