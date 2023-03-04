import styled from "styled-components";

export const StyledPageContainer = styled.div`
    width: 70%;
    max-wdith: 1300px;
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    text-align: center;

    @media screen and (max-width: 1400px){
       width: 90%;
    }
`