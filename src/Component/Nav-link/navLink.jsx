import { NavLinkStyled } from './navLink.style'

const NavLink = ({ text, clickHandler }) => {
    return (
        <NavLinkStyled onClick={clickHandler}>{text}</NavLinkStyled>
    )
}

export default NavLink