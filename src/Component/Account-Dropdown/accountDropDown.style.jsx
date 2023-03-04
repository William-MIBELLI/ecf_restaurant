import styled from "styled-components";
import NavLink from "../Nav-link/navLink";

export const AccountDropDownContainer = styled.div`
    height: 100px;
    background-color: black;
    position: absolute;
    right: 0;
    bottom: -90px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    @media screen and (max-width: 768px){
        width: 100%;
        height: 150px;
        bottom: -150px;
        display: grid;
        grid-template-columns: 1fr;
        justify-items: center;
    }
`

export const NavLinkDD = styled(NavLink)`

`