import { useSelector } from 'react-redux'
import { getMenuSelector } from '../../store/menu/menu.selector'
import { getScheduleSelector } from '../../store/schedule/schedule.selector'
import { getCardSelector } from '../../store/card/card.selector'
import {} from './admin.style'
import { getReservationSelector } from '../../store/reservation/reservation.selector'
import AdminCategory from '../../Component/Admin-Category/adminCategory'
import PageContainer from '../../Component/Page-Container/pageContainer'
import AdminReservation from '../../Component/Admin-Reservation/adminReservation'

export const ADMIN_CONTENT_TYPE = {
    MENU: 'MENU',
    PLATE: 'PLATE',
    SCHEDULE: 'SCHEDULE',
    RESERVATION: 'RESERVATION'
}

const Admin = () => {

    const menus = useSelector(getMenuSelector)
    const plates = useSelector(getCardSelector)
    const schedule = useSelector(getScheduleSelector)
    const reservations = useSelector(getReservationSelector)

    return (
        <PageContainer>
            <AdminCategory title={'Les menus'} content={menus} creationButton={true} type={ADMIN_CONTENT_TYPE.MENU}/>
            <AdminCategory title={'La carte'} content={plates} creationButton={true} type={ADMIN_CONTENT_TYPE.PLATE}/>
            <AdminCategory title={'Les horaires'} content={schedule} type={ADMIN_CONTENT_TYPE.SCHEDULE}/>
            {/* <AdminCategory title={'Liste des réservations'} content={reservations} type={ADMIN_CONTENT_TYPE.RESERVATION}/> */}
            <AdminReservation/>
        </PageContainer>
    )
}

export default Admin