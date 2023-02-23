import { PlateContainer, PlateDescriptionContainer, InvertedPlateContainer } from './plate.style'
import Description from '../Description/description'


const Plate = ({ item, index }) => {

    const { name, description, price, imgUrl } = item

    const getPlate = (index) => {
        if(index%2){
            return PlateContainer
        }
        return InvertedPlateContainer
    }

    const CustomContainer = getPlate(index)

    return (
        <CustomContainer imgUrl={imgUrl}>
            <PlateDescriptionContainer>
                <Description 
                    title={name}
                    subTitle={description}
                    content={price+'€'}
                />
            </PlateDescriptionContainer>
        </CustomContainer>
    )
}

export default Plate