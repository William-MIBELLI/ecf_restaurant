import { AdminReservationContainer,
        AdminReservationHeader,
        AdminReservationContent,
        Icon,
        IconContainer,
        TitleContainer } from './adminReservation.style'
import arrow from '../../Asset/Icons/arrow.png'
import { useSelector } from 'react-redux'
import { getReservationSelector } from '../../store/reservation/reservation.selector'
import { useState } from 'react'
import AdminReservationDay from '../Admin-Reservation-Day/adminReservationDay'



const AdminReservation = () => {

    const reservationsArray = useSelector(getReservationSelector)
    const [ displayContent, setDisplayContent ] = useState(false)

    const onArrowClick = () => {
        setDisplayContent(!displayContent)
    }

    return (
        <AdminReservationContainer>
            <AdminReservationHeader>
                <TitleContainer>Les réservations</TitleContainer>
                <IconContainer>
                    <Icon src={arrow} onClick={onArrowClick}/>
                </IconContainer>
            </AdminReservationHeader>
            <AdminReservationContent>
                {displayContent && reservationsArray.map(day => ( <AdminReservationDay day={day}/>))}
            </AdminReservationContent>
        </AdminReservationContainer>
    )
}

export default AdminReservation