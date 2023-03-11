import { createAction } from "../../Services/helper";
import { RESERVATION_ACTION_TYPE } from "./reservation.type";


export const CancelReservation = (state, reservationToCancel) => {

    const newState = state.filter(item => item.id !== reservationToCancel.id)

    return createAction(RESERVATION_ACTION_TYPE.CANCEL_RESERVATION, newState)
}

export const fetchReservationFromDb = (reservationArray) => {
    return createAction(RESERVATION_ACTION_TYPE.FETCH_FROM_DB, reservationArray)
}

export const confirmReservation = (state, reservationToConfirm) => {
    const newState = state.map(item => {
        if(item.id === reservationToConfirm.id){
            return {...item, isConfirmed: true}
        }
        return item
    })

    return createAction(RESERVATION_ACTION_TYPE.CONFIRM_RESERVATION, newState)
}