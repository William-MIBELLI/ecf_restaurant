import styled from "styled-components";

export const LogInContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    @media screen and (max-width: 1100px){
        flex-direction: column;
        justify-content: center;
        align-items: center;

        div{
            margin: 30px 0;
        }
    }
`

export const MailAdressDisplay = styled.span`
    color: blue;
    font-weight: 200;
    font-style: italic;
`