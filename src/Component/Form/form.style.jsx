import styled from "styled-components"

export const FormInputContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    justify-items: left;
    align-items: center;
    margin: 20px 0;

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
    }
`
export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center
`

export const FormButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`