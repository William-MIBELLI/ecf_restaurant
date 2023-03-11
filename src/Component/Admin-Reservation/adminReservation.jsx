import { AdminReservationContainer,
        AdminReservationHeader,
        AdminReservationContent,
        Icon,
        IconContainer,
        TitleContainer } from './adminReservation.style'
import arrow from '../../Asset/Icons/arrow.png'
import { useSelector } from 'react-redux'
import { getReservationSelector, getReservationSplittedByDay } from '../../store/reservation/reservation.selector'
import { useState } from 'react'
import AdminReservationDay from '../Admin-Reservation-Day/adminReservationDay'



const AdminReservation = () => {

    const reservationsArray = useSelector(getReservationSelector)
    console.log('reser depuis adminreservation : ', reservationsArray)
    const sortedResa = useSelector(getReservationSplittedByDay)
    console.log('sorted resa : ', sortedResa)
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
                {displayContent && Object.entries(sortedResa).map(([date,day]) => ( <AdminReservationDay day={day} date={date}/>))}
            </AdminReservationContent>
        </AdminReservationContainer>
    )
}

export default AdminReservation