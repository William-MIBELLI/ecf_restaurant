import styled from "styled-components";

export const PlateContainer = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: flex-start;
    justify-content: center;
    margin: 20px auto;
    background-image: url(${props => props.imgUrl});
    background-size: 40%;
    background-repeat: no-repeat;
    background-position: right;
    min-height: 250px;

    p{
        text-align: right;
    }
`

export const PlateDescriptionContainer = styled.div`
    height: 65%;
    width: 65%;
    background-color: white;

    box-shadow: 5px 5px 15px grey;
`

export const InvertedPlateContainer = styled(PlateContainer)`
    align-items: flex-end;
    background-position: left;
`


