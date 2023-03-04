import  styled, { css } from "styled-components";

export const AdminReservationDayContainer = styled.div`
    margin-top: 10px;
`
export const AdminReservationDayHeader = styled.div`
    background-color: black;
    color: white;
`
export const ServiceNameContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
    align-items: center;

    p{
        cursor: pointer;
    }
`

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