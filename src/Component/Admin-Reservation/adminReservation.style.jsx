import styled from "styled-components";

export const AdminReservationContainer = styled.div`
    margin: 20px auto;
    text-align: center;
    width: 80%;
    box-shadow: 5px 5px 15px grey;

    @media screen and (max-width: 768px){
        width: 95%;
    }
`

export const AdminReservationContent = styled.div`

`
export const AdminReservationHeader = styled.div`
    min-height: 30px;
    text-align: left;
    padding: 10px;
` 
export const Icon = styled.img`
    width: 30px;
    height: 30px;
    cursor: pointer;
    margin: 0 5px;

    &:hover {
        transform: scale(1.1);
    }
`
export const IconContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    float: right;
`  
export const TitleContainer = styled.span`
    font-size: 1.5rem;
    font-family: 'Montserrat', sans-serif;
`
