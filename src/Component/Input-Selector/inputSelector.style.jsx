import styled from "styled-components";

export const InputSelectorBase = styled.select`
    width: 100%;
    padding: 10px;
`

export const Label = styled.label`
    font-weight: bold;
    color: #D5CEA3;
`

export const OptionStyled = styled.option`
    padding: 10px;
    border-radius: 0;
    margin-top: 20px;

    &:hover{
        background-color: #D5CEA3;
    }
`