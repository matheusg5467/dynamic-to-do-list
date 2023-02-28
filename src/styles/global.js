import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root {
        font-size: 62.5%;
    }

    body {
        background-color: ${({ theme }) => theme.COLORS.BLACK_BACKGROUND};

        -webkit-font-smoothing: antialiased;

        font-family: 'Dosis', sans-serif;
        font-weight: 600;
        font-size: 6.4rem;
        outline: none;
    }

    input {
        font-family: 'Dosis', sans-serif;
        font-weight: 700;
        font-size: 4.8rem;
    }

    text {
        font-family: 'Dosis', sans-serif;
        font-weight: 700;
        font-size: 4.8rem;
    }

    button {
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover {
        filter: brightness(1s);
    }
`