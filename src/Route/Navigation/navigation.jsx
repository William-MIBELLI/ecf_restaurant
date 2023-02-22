import { Outlet } from "react-router-dom"
import { NavigationContainer, Brand } from './navigation.style'
import NavLink from "../../Component/Nav-link/navLink"
import { Link } from "react-router-dom"

const Navigation = () => {
    return (
        <div>
            <NavigationContainer>
                <Brand>
                    <Link to='/'>Le Quai Antique</Link>
                </Brand>
                <Link to='/menu'>
                    <NavLink text={'Menu'}/>
                </Link>
                <Link to='/reservation'>
                    <NavLink text={'Reservation'}/>
                </Link>
                <Link to='/account'>
                    <NavLink text={'Compte'}/>
                </Link>
            </NavigationContainer>
            <Outlet/>
        </div>
    )
}

export default Navigation