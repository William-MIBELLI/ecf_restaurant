import styled from "styled-components";

export const BaseDescription = styled.div`
    display: flex;
    flex-direction : column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    text-align: justify;
    margin-bottom: 20px;
    padding: 20px;
    
    h2{
        color: black;
        font-family: 'Montserrat', sans-serif;
        font-weight: 200;
        font-size: 2rem;
        margin-bottom: 5px;
    }

    h3{
        color: #D5CEA3;
        font-family: 'Montserrat', sans-serif;
        font-weight: regular;
        font-size: 1rem;
    }

    p{
        margin-top: 25px;
        color: black;
    }
`
