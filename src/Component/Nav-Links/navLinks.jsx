import { Fragment, useState } from 'react'
import { } from './navLinks.style'
import { Link, useNavigate } from 'react-router-dom'
import NavLink from '../Nav-link/navLink'
import { useDispatch, useSelector } from 'react-redux'
import { getCurrentUserSelector } from '../../store/user/user.selector'
import { disconnectUser } from '../../store/user/user.action'
import AccountDropDown from '../Account-Dropdown/accountDropDown'
import { signOutUser } from '../../Services/firebase'

const NavLinks = ({ clickHandler, isVertical = false }) => {

    const user = useSelector(getCurrentUserSelector)
    const [ displayAccountDD, setDisplayAccountDD ] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const accountClickHandler = () => {
        setDisplayAccountDD(!displayAccountDD)
    }
    
    const disconnectClickHandler = () => {
        setDisplayAccountDD(false)
        signOutUser()
        dispatch(disconnectUser())
        navigate('/')
    }
    const onMouseInHandler = () => {
        setDisplayAccountDD(true)
    }

    const onMouseOuthandler = () => {
        setDisplayAccountDD(false)
    }

    return (
        <Fragment>
            <Link to='/'>
                <NavLink text={'Accueil'} clickHandler={clickHandler}/>
            </Link>
            <Link to='/menu'>
                <NavLink text={'Menu'} clickHandler={clickHandler}/>
            </Link>
            {user.mail === 'william.mibelli@gmail.com' && (
                <Link to='/admin'>
                    <NavLink text={'Admin'} clickHandler={clickHandler}/>
                </Link>
            )}
            <Link to='/card'>
                <NavLink text={'La carte'} clickHandler={clickHandler}/>
            </Link>
            <Link to='/reservation'>
                <NavLink text={'Reservation'} clickHandler={clickHandler}/>
            </Link>
            {Object.keys(user).length === 0
            ? (<Link to='/login'>
                <NavLink text={'Connexion'} clickHandler={clickHandler} />
            </Link>)
            : !isVertical ? (
                <NavLink text={'Mon Compte'} clickHandler={accountClickHandler} mouseOut={onMouseOuthandler} mouseIn={onMouseInHandler}/>
            ) : (<Fragment>
                    <Link to={'/account'}>
                        <NavLink text={'Gestion de mon compte'} clickHandler={clickHandler}/>
                    </Link>
                    <NavLink text={'Déconnexion'} clickHandler={disconnectClickHandler}/>
                </Fragment>
                )}
            {
                 displayAccountDD && <AccountDropDown 
                 mouseIn={onMouseInHandler}
                 mouseOut={onMouseOuthandler}
                 disconnect={disconnectClickHandler} 
                 hideHandler={accountClickHandler}/>
            }
            
        </Fragment>
    )
}

export default NavLinks