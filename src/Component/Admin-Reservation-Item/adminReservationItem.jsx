import { AdminReservationItemContainer, InfoReservation, ButtonsContainer } from "./adminReservationItem.style"
import Button, { BUTTON_TYPE } from '../Button/button'
import { useDispatch, useSelector } from 'react-redux'
import { getReservationSelector } from "../../store/reservation/reservation.selector"
import { CancelReservation, confirmReservation } from "../../store/reservation/reservation.action"

const AdminReservationItem = ({ item }) => {

    const { lastName, firstName, mail, phone, number, isConfirmed } = item
    const state = useSelector(getReservationSelector)
    const dispatch = useDispatch()

    const confirmHandler = () => {
        dispatch(confirmReservation(state, item))
    }

    const cancelHandler = () => {
        dispatch(CancelReservation(state, item))
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