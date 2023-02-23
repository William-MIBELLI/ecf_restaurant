import { PlateContainer, PlateDescriptionContainer } from './plate.style'
import Description from '../Description/description'


const Plate = ({ item }) => {

    const { name, id, description, price, imgUrl, ingredients } = item


    return (
        <PlateContainer imgUrl={imgUrl}>
            <PlateDescriptionContainer>
                <Description
                    title={name}
                    subTitle={description}
                    content={price+'€'}
                />
            </PlateDescriptionContainer>
        </PlateContainer>
    )
}

export default Plate