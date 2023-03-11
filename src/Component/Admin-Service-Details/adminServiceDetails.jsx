import { useSelector } from 'react-redux'
import { getPlacesLeftSelector, getReservationNumber } from '../../store/reservation/reservation.selector'
import { ServiceName, ServiceNameDetailsContainer } from './adminServiceDetails.style'

const AdminServiceDetails = ({ date, serviceName, onClickHandler, isSelected }) => {

    const place = useSelector(getPlacesLeftSelector(date, serviceName))
    const nbResa = useSelector(getReservationNumber(date, serviceName))

    return (
        <ServiceName  selected={isSelected} onClick={(e) => onClickHandler(e, serviceName)}>
            <h4>{serviceName}</h4>
            <ServiceNameDetailsContainer>
                <div>Nombre de réservations : {nbResa}</div>
                <div>Places restantes : {50 - place}</div>
            </ServiceNameDetailsContainer>
        </ServiceName>
    )
}

export default AdminServiceDetails