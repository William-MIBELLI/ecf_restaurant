import styled from "styled-components";

export const FooterContainer = styled.div`
    width: 100%;
    height: 300px;
    background-color: black;
    position: absolute;
    bottom: 0;
    display: grid;
    grid-template-columns: 2fr 1fr;
    align-items: center;
    @media screen and (max-width: 768px){
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 500px){
        grid-template-columns: 1fr;
        gap: 20px;
        height: 500px;
    }
`

export const ContactsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    @media screen and (max-width: 768px){
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        height: 100%;
        text-align: center;
    }

    @media screen and (max-width: 500px){
        div {
            margin-top: 20px;
        }
    }
`