import { Outlet } from "react-router-dom"
import { NavigationContainer, Brand, BodyContainer, NavLinksContainer, NavLinksVerticalContainer } from './navigation.style'
import { Link } from "react-router-dom"
import Footer from "../../Component/Footer/footer"
import BurgerIcon from "../../Component/Burger-Icon/burgerIcon"
import { useState } from "react"
import NavLinks from "../../Component/Nav-Links/navLinks"

const Navigation = () => {


    const [ isExpendedNav, setIsExpendedNav ] = useState(false)


    const onBurgerClick = () => {
        setIsExpendedNav(!isExpendedNav)
    }

    const onNavClick = () => {
        console.log('hideclick ok')
        setIsExpendedNav(false);
    }

    return (
        <BodyContainer>
            <NavigationContainer>
                <Brand onClick={onNavClick}>
                    <Link to='/'>QA</Link>
                </Brand>
                <NavLinksContainer>
                    <NavLinks />
                </NavLinksContainer>
                <BurgerIcon clickHandler={onBurgerClick}/>
                { isExpendedNav 
                ? <NavLinksVerticalContainer>
                    <NavLinks clickHandler={onNavClick} isVertical={true}/>
                </NavLinksVerticalContainer> 
                : null}
            </NavigationContainer>
            <Outlet/>
            <Footer/>
        </BodyContainer>
    )
}

export default Navigation