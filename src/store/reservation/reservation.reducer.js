import { RESERVATION_ACTION_TYPE } from "./reservation.type"
import { ServiceReservation } from "../../Services/class"
import { getFormatedDate } from "../../Services/helper";
import { Day } from "../../Services/class";

// const day = new ServiceReservation(1, getFormatedDate());
// const day2 = new ServiceReservation(2, getFormatedDate(1));
const day = new Day(getFormatedDate())
const day2 = new Day(getFormatedDate(1))
const reservationList = {
    days : [day, day2]
}

export const Reservationreducer = (state = reservationList, action) => {
    const { type, payload } = action
    //console.log('action dans le reducer : ', action)
    switch(type){
        case RESERVATION_ACTION_TYPE.ADD_NEW_RESERVATION:
            return {
                days: [...payload]
            }
        case RESERVATION_ACTION_TYPE.DELETE_RESERVATION:
            return {
                days: [...payload]
            }
        case RESERVATION_ACTION_TYPE.ADD_NEW_DAY:
            return{
                days: [...payload]
            }
        case RESERVATION_ACTION_TYPE.CONFIRM_RESERVATION:
            return{
                days: [...payload]
            }
        default:
            return state
    }
}