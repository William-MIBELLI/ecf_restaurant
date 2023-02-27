import { Fragment } from 'react'
import {} from './navLinks.style'
import { Link } from 'react-router-dom'
import NavLink from '../Nav-link/navLink'

const NavLinks = ({ clickHandler }) => {
    return (
        <Fragment>
            <Link to='/'>
                <NavLink text={'Accueil'} clickHandler={clickHandler}/>
            </Link>
            <Link to='/menu'>
                <NavLink text={'Menu'} clickHandler={clickHandler}/>
            </Link>
            <Link to='/card'>
                <NavLink text={'La carte'} clickHandler={clickHandler}/>
            </Link>
            <Link to='/reservation'>
                <NavLink text={'Reservation'} clickHandler={clickHandler}/>
            </Link>
            <Link to='/account'>
                <NavLink text={'Compte'} clickHandler={clickHandler}/>
            </Link>
        </Fragment>
    )
}

export default NavLinks