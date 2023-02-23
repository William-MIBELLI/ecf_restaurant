import { Fragment } from 'react'
import { HeaderContainer, HeaderDescription } from './header.style'
import Description from '../Description/description'
import Button from '../Button/button'
import { useNavigate } from 'react-router-dom'

const Header = ({ headerContent }) => {

    const { imgUrl, h1, title, subTitle, content } = headerContent
    const navigate = useNavigate()

    const clickReservationHandler = () => {
        navigate('/reservation')
    }

    return (
        <Fragment>
            <HeaderContainer imgUrl={imgUrl}>
                    <h1>{h1}</h1>
            </HeaderContainer>
            <HeaderDescription>
                <Description 
                title={title} 
                subTitle={subTitle} 
                content={content}>
                </Description>
                <Button clickHandler={clickReservationHandler}>Réserver</Button>
            </HeaderDescription>
        </Fragment>
    )
}

export default Header