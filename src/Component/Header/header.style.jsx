import styled from "styled-components";

export const HeaderContainer = styled.div`
    background-image: url(${props => props.imgUrl});
    background-size: 100%;
    background-position: center;
    height: 600px;

    h1{
        font-size: 9rem;
        font-weight: normal;
        color: white;
        font-family: 'Great Vibes', cursive;
        padding-top: 80px;
        padding-left: 80px;
        text-shadow: 5px 5px 10px black;
    }

`

export const HeaderDescription = styled.div`
    width: 60%;
    margin: 0 auto;
    margin-top: -100px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: left;
    background-color: white;
    padding: 20px;
`