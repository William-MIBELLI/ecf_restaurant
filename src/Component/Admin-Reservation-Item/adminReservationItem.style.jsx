import styled from "styled-components";

export const AdminReservationItemContainer = styled.div`
    min-height: 70px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    border-top: 1px solid black;
    background-color: ${({ isConfirmed }) => isConfirmed ? 'yellowgreen' : 'white' };
`

export const InfoReservation = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`
export const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`
