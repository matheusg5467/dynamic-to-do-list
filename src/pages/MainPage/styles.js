import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-columns: auto 300px;
    grid-template-rows: 160px auto;
    grid-template-areas: 
        "header sidebar"
        "content sidebar";
`