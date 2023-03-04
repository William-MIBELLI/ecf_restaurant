import { ServiceName, ServiceNameDetailsContainer } from './adminServiceDetails.style'

const adminServiceDetails = ({ serviceName, onClickHandler, nbReservation, placeLeft, isSelected }) => {
    return (
        <ServiceName  selected={isSelected} onClick={(e) => onClickHandler(e, serviceName)}>
            <h4>{serviceName}</h4>
            <ServiceNameDetailsContainer>
                <div>Nombre de réservations : {nbReservation}</div>
                <div>Places restantes : {placeLeft}</div>
            </ServiceNameDetailsContainer>
        </ServiceName>
    )
}

export default adminServiceDetails