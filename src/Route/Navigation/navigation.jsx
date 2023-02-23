import { Outlet } from "react-router-dom"
import { NavigationContainer, Brand, PageContainer } from './navigation.style'
import NavLink from "../../Component/Nav-link/navLink"
import { Link } from "react-router-dom"
import Footer from "../../Component/Footer/footer"

const Navigation = () => {
    return (
        <PageContainer>
            <NavigationContainer>
                <Brand>
                    <Link to='/'>QA</Link>
                </Brand>
                <Link to='/'>
                    <NavLink text={'Accueil'}/>
                </Link>
                <Link to='/menu'>
                    <NavLink text={'Menu'}/>
                </Link>
                <Link to='/card'>
                    <NavLink text={'La carte'}/>
                </Link>
                <Link to='/reservation'>
                    <NavLink text={'Reservation'}/>
                </Link>
                <Link to='/account'>
                    <NavLink text={'Compte'}/>
                </Link>
            </NavigationContainer>
            <Outlet/>
            <Footer/>
        </PageContainer>
    )
}

export default Navigation