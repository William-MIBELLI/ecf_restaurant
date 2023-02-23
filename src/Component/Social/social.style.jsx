import styled from "styled-components";

export const SocialContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 200px;

    h4{
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        color: white;
        text-align: center;
    }
`

export const SocialIconContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-top: 10px;
`

export const SocialIcon = styled.img`
    width: 30px;
    height: 30px;
    cursor: pointer;

    &:hover{
        transform: scale(1.1);
    }
`