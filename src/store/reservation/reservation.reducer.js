import { RESERVATION_ACTION_TYPE } from "./reservation.type"
import { DayReservation } from "../../Services/class"
import { getFormatedDate } from "../../Services/helper";

const day = new DayReservation(1, getFormatedDate());
const day2 = new DayReservation(2, getFormatedDate(1));
const reservationList = {
    days : [day, day2]
}

export const Reservationreducer = (state = reservationList, action) => {
    const { type, payload } = action
    //console.log('action dans le reducer : ', action)
    switch(type){
        case RESERVATION_ACTION_TYPE.ADD_NEW_RESERVATION:
            return {
                ...state,
                ...payload
            }
        case RESERVATION_ACTION_TYPE.DELETE_RESERVATION:
            return {
                ...payload
            }
        case RESERVATION_ACTION_TYPE.ADD_NEW_DAY:
            return{
                ...state,
                days: [...payload]
            }
        default:
            return state
    }
}