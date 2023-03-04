import { useState } from 'react'
import AdminReservationItem from '../Admin-Reservation-Item/adminReservationItem'
import AdminServiceDetails from '../Admin-Service-Details/adminServiceDetails'
import { AdminReservationDayContainer, AdminReservationDayHeader, ServiceNameContainer } from './adminReservationDay.style'

const AdminReservationDay = ({ day }) => {

    const {  date } = day
    const [ displayContent, setDisplayContent ] = useState(false)
    const [ serviceToDisplay, setServiceToDisplay ] = useState('')
    const nBReservationMidi = day['Midi'].reservationArray.length
    const nBReservationSoir = day['Soir'].reservationArray.length
    const placeLeftMidi = day['Midi'].placeLeft
    const placeLeftSoir = day['Soir'].placeLeft


    const onClickServiceHandler = (event, id) => {

        if(id === serviceToDisplay){
            setServiceToDisplay('')
            setDisplayContent(false)
        } else {
            setServiceToDisplay(id)
            setDisplayContent(true)
        }
    }

    return (
        <AdminReservationDayContainer>
            <AdminReservationDayHeader>
                {date}
            </AdminReservationDayHeader>
            <ServiceNameContainer>
                <AdminServiceDetails isSelected={serviceToDisplay === 'Midi'} serviceName='Midi' onClickHandler={onClickServiceHandler} nbReservation={nBReservationMidi} placeLeft={placeLeftMidi}/>
                <AdminServiceDetails isSelected={serviceToDisplay === 'Soir'} serviceName={'Soir'} onClickHandler={onClickServiceHandler} nbReservation={nBReservationSoir} placeLeft={placeLeftSoir}/>
            </ServiceNameContainer>
            {displayContent && day[serviceToDisplay].reservationArray.map(item => (
                <AdminReservationItem item={item}/>
            ))}
        </AdminReservationDayContainer>
    )
}
export default AdminReservationDay