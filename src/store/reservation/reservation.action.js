import { DayReservation } from "../../Services/class";
import { createAction } from "../../Services/helper";
import { RESERVATION_ACTION_TYPE } from "./reservation.type";

export const addNewReservation = (state, reservation) => {

    const existingDay = state.days.find(day => day.date === reservation.dateValue)

    if(!existingDay){
        addNewDay(state, reservation.dateValue)
    }

    const temp = state.days.map(day => {
        //console.log('day.date : ', day.date + ' reservation.dateValue : ',reservation.dateValue)
        //return day.date === reservation.dateValue ? {...day, reservationArray.push(reservation)} : day
        if(day.date === reservation.dateValue){
            console.log('on passe dans le if')
            const newDay = {...day}
            newDay.reservationArray.push(reservation)
            return newDay
        }
        console.log('on NE passe PAS dans le if')
        return day
    })

    console.log(temp);
    return createAction(RESERVATION_ACTION_TYPE.ADD_NEW_RESERVATION, {...state, days:temp})
}

export const addNewDay = (state, date) => {
    console.log('on rentre dans addnewday')
    const newDay = new DayReservation(Math.random(), date)
    const newState = {...state}
    newState.days.push(newDay)
    console.log('newstate : ', newState)
    return createAction(RESERVATION_ACTION_TYPE.ADD_NEW_DAY, newState)
}