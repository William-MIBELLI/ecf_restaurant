import {  BurgerContainer } from './burgerIcon.style'

const BurgerIcon = ({ clickHandler }) => {
    return (
        <BurgerContainer onClick={clickHandler}>
            <div></div>
        </BurgerContainer>
    )
}

export default BurgerIcon