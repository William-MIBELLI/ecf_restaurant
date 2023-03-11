import { AdminReservationItemContainer, InfoReservation, ButtonsContainer } from "./adminReservationItem.style"
import Button, { BUTTON_TYPE } from '../Button/button'
import { useDispatch, useSelector } from 'react-redux'
import { getReservationSelector } from "../../store/reservation/reservation.selector"
import { CancelReservation, confirmReservation } from "../../store/reservation/reservation.action"
import { cancelReservationOnDb, confirmResevationOnDb } from "../../Services/firebase"

const AdminReservationItem = ({ item }) => {

    const { lastName, firstName, mail, phone, number, isConfirmed, id } = item
    const state = useSelector(getReservationSelector)
    const dispatch = useDispatch()

    const confirmHandler = async  () => {
        try{
            await confirmResevationOnDb(id)
            dispatch(confirmReservation(state, item))
        }catch(error){
            console.log('error : ', error)
        }
    }

    const cancelHandler = async () => {
        try{
            await cancelReservationOnDb(id)
            dispatch(CancelReservation(state,item))
        }catch(error){
            console.log('error : ', error)
        }
    }
    return (
        <AdminReservationItemContainer isConfirmed={isConfirmed}>
            <InfoReservation>
                <div>{`${lastName} ${firstName}`}</div>
                <div>{mail}</div>
                <div>{phone}</div>
                <div>Nombre de places : {number}</div>
            </InfoReservation>
            <ButtonsContainer>
                <Button look={BUTTON_TYPE.confirm} clickHandler={confirmHandler}>Confirmer</Button>
                <Button look={BUTTON_TYPE.delete} clickHandler={cancelHandler} >Annuler</Button>
            </ButtonsContainer>
        </AdminReservationItemContainer>
    )
}

export default AdminReservationItem