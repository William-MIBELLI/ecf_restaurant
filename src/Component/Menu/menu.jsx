import Description from '../Description/description'
import { MenuContainer, Price } from './menu.style'


const Menu = ({ menu }) => {

    const { name, description, price, availability } = menu

    return (
        <MenuContainer>
            <Description
                title={name}
                subTitle={availability}
                content={description}
            />
            <Price>
                {price+'€'}
            </Price>
        </MenuContainer>
    )
}

export default Menu