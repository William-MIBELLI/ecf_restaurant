import { useDispatch, useSelector } from 'react-redux'
import { getMenuSelector } from '../../store/menu/menu.selector'
import { getScheduleSelector } from '../../store/schedule/schedule.selector'
import { getCardSelector } from '../../store/card/card.selector'
import { ButtonContainer } from './admin.style'
import { getReservationSelector } from '../../store/reservation/reservation.selector'
import AdminCategory from '../../Component/Admin-Category/adminCategory'
import PageContainer from '../../Component/Page-Container/pageContainer'
import AdminReservation from '../../Component/Admin-Reservation/adminReservation'
import Button, { BUTTON_TYPE } from '../../Component/Button/button'
import menuArray from '../../menu_array.json'
import cardArray from '../../card_array.json'
import scheduleArray from '../../schedule_array.json'
import { getdataFromDb, pushData } from '../../Services/firebase'
import { getCurrentUserSelector } from '../../store/user/user.selector'
import { Fragment, useEffect, useState } from 'react'
import ErrorMessage from '../../Component/Error-Message/errorMessage'
import { fetchReservationFromDb } from '../../store/reservation/reservation.action'

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
    const currentUser = useSelector(getCurrentUserSelector)
    const [ reservations, setReservations ] = useState(undefined)
    const dispatch = useDispatch()
    

    const onPushData = async (collectionName, dataToPush) => {
        console.log('data dans onpushdata : ', dataToPush)
        try{
            const response = await pushData(collectionName, dataToPush)
            console.log('response depuis admin : ', response)
        }catch(error){
            console.error('Une erreur est survenue : ', error)
        }
    }

    const onGetData = async (dataName) => {
        try{
            const response = await getdataFromDb(dataName)
            console.log('response depuis admin : ', response)
        } catch(error){
            console.log('erreur : ', error)
        }
    }
    useEffect(() => {
        const callDb = async () => {
            const resp = await getdataFromDb('reservations')
            setReservations(resp)
            dispatch(fetchReservationFromDb(resp))
            
        }
        callDb()
    },[])

    useEffect(()=> {
        console.log('reservation depuis eseffect : ', reservations)
    },[reservations])

    return (
        <PageContainer>
        {currentUser.mail === 'test@admin.com' ? (
            <Fragment>
                <AdminCategory title={'Les menus'} content={menus} creationButton={true} type={ADMIN_CONTENT_TYPE.MENU}/>
                <AdminCategory title={'La carte'} content={plates} creationButton={true} type={ADMIN_CONTENT_TYPE.PLATE}/>
                <AdminCategory title={'Les horaires'} content={schedule} type={ADMIN_CONTENT_TYPE.SCHEDULE}/>
                <AdminReservation/>
                {/* <ButtonContainer>
                    <Button clickHandler={() => onPushData('menus', menuArray) }>Push MENU</Button>
                    <Button clickHandler={() => onPushData('card', cardArray) }>Push CARTE</Button>
                    <Button clickHandler={() => onPushData('schedule', scheduleArray) }>Push HORAIRE</Button>
                    <Button clickHandler={() => onGetData('card')} look={BUTTON_TYPE.confirm}>Recuperer carte</Button>
                </ButtonContainer> */}
            </Fragment>
        ) : (
            <ErrorMessage>Vous n'avez pas les autorisations nécessaires pour accéder à cette page</ErrorMessage>
        )}
        </PageContainer>
    )
}

export default Admin