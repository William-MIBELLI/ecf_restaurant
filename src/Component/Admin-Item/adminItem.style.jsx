import styled from "styled-components";
import Button from "../Button/button";
import Form from "../Form/form";

export const AdminItemContainer = styled.div`
    border-top: 1px solid black;
    margin-bottom: 10px;
`

export const AdminItemHeader = styled.div`
    cursor: pointer;
`

export const Arrow = styled.img`
    width: 30px;
    height: 30px;
    cursor: pointer;

`
export const AdminItemForm = styled(Form)`
    flex-direction: row;
    justify-content: space-evenly;
    width: auto;
    @media screen and (max-width: 1100px){
        flex-direction: column;
        margin-bottom: 10px;
    }
`
export const AdminItemFormContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    width: 90%;
    margin: auto;
    
    @media screen and (max-width: 1100px){
        grid-template-columns: 1fr;
    }
`

