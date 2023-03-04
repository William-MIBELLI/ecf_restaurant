import styled, { css } from "styled-components";

export const ServiceName = styled.div`
    cursor: pointer;
    width: 100%;
    ${({ selected }) => selected && SelectedDiv}
`

export const SelectedDiv = css`
    background-color: green;
    font-weight: bold;
`

export const ServiceNameDetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

export const ServiceDetails = styled.div`

`