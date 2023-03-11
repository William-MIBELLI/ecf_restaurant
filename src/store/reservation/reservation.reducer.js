import { RESERVATION_ACTION_TYPE } from "./reservation.type"

export const Reservationreducer = (state = {reservations: []}, action) => {
    const { type, payload } = action
    //console.log('action dans le reducer : ', action)
    switch(type){
        case RESERVATION_ACTION_TYPE.FETCH_FROM_DB:
            return{
                reservations: [...payload]
            }
        case RESERVATION_ACTION_TYPE.CONFIRM_RESERVATION:
            return{
                reservations: [...payload]
            }
        case RESERVATION_ACTION_TYPE.CANCEL_RESERVATION:
            return{
                reservations: [...payload]
            }
        default:
            return state
    }
}