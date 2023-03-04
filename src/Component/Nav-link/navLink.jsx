import { NavLinkStyled } from './navLink.style'

const NavLink = ({ text, clickHandler, mouseIn, mouseOut, className }) => {
    return (
        <NavLinkStyled className={className} onMouseLeave={mouseOut} onMouseEnter={mouseIn} onClick={clickHandler}>{text}</NavLinkStyled>
    )
}

export default NavLink