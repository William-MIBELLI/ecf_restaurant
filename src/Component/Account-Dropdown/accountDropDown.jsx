import NavLink from '../Nav-link/navLink'
import { AccountDropDownContainer, NavLinkDD } from './accountDropDown.style'
import { Link } from 'react-router-dom'

const AccountDropDown = ({ disconnect, hideHandler, mouseIn, mouseOut }) => {
    return (
        <AccountDropDownContainer onMouseOver={mouseIn} onMouseLeave={mouseOut}>
            <Link to={'/account'}>
                <NavLinkDD text={'Gestion de mon compte'} clickHandler={hideHandler}/>
            </Link>
            <NavLinkDD text={'Déconnexion'} clickHandler={() => {disconnect();hideHandler()}}/>
        </AccountDropDownContainer>
    )
}

export default AccountDropDown