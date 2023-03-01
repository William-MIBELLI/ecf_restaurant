import { Fragment } from 'react'
import {} from './navLinks.style'
import { Link } from 'react-router-dom'
import NavLink from '../Nav-link/navLink'
import { useDispatch, useSelector } from 'react-redux'
import { getUserSelector } from '../../store/user/user.selector'
import { disconnectUser } from '../../store/user/user.action'

const NavLinks = ({ clickHandler }) => {

    const user = useSelector(getUserSelector)
    const dispatch = useDispatch()

    const disconnectClickHandler = () => {
        dispatch(disconnectUser())
    }

    return (
        <Fragment>
            <Link to='/'>
                <NavLink text={'Accueil'} clickHandler={clickHandler}/>
            </Link>
            <Link to='/menu'>
                <NavLink text={'Menu'} clickHandler={clickHandler}/>
            </Link>
            {/* <Link to='/admin'>
                <NavLink text={'Admin'} clickHandler={clickHandler}/>
            </Link> */}
            <Link to='/card'>
                <NavLink text={'La carte'} clickHandler={clickHandler}/>
            </Link>
            <Link to='/reservation'>
                <NavLink text={'Reservation'} clickHandler={clickHandler}/>
            </Link>
            {Object.keys(user).length === 0
            ? (<Link to='/login'>
                <NavLink text={'Connexion'} clickHandler={clickHandler}/>
            </Link>)
            :(
                <NavLink text={'Déconnexion'} clickHandler={disconnectClickHandler}/>
            )}
            
        </Fragment>
    )
}

export default NavLinks