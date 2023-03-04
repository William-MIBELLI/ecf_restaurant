import styled from "styled-components";

export const BaseButton = styled.button`
    padding: 10px 20px;
    border: 2px solid #D5CEA3;
    background: white;
    color: #D5CEA3;
    font-weight: bold;
    cursor: pointer;

    &:hover{
        background: #D5CEA3;
        color: white;
    }

`

export const InvertedButton = styled(BaseButton)`
    background: #D5CEA3;
    color: white;

    &:hover{
        background: white;
        color: #D5CEA3;
    }
`

export const DeleteButton = styled(BaseButton)`
    color: red;
    border: 1px solid red;

    &:hover{
        background-color: red;
        color: white;
    }
`

export const ConfirmButton = styled(BaseButton)`
    color: green;
    border: 1px solid green;

    &:hover{
        background-color: green;
        color: white;
    }
`