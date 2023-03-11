import { useState } from 'react'
import AdminReservationItem from '../Admin-Reservation-Item/adminReservationItem'
import AdminServiceDetails from '../Admin-Service-Details/adminServiceDetails'
import { AdminReservationDayContainer, AdminReservationDayHeader, ServiceNameContainer } from './adminReservationDay.style'

const AdminReservationDay = ({ day, date }) => {


    const [ displayContent, setDisplayContent ] = useState(false)
    const [ serviceToDisplay, setServiceToDisplay ] = useState('')

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
            <AdminServiceDetails serviceName={'Midi'} date={date} onClickHandler={onClickServiceHandler} isSelected={serviceToDisplay === 'Midi'}/>
            <AdminServiceDetails serviceName={'Soir'} date={date} onClickHandler={onClickServiceHandler} isSelected={serviceToDisplay === 'Soir'}/>
            </ServiceNameContainer>
            {displayContent && day.map(item => item.service === serviceToDisplay && (
                <AdminReservationItem item={item}/>
            ))}
        </AdminReservationDayContainer>
    )
}
export default AdminReservationDay