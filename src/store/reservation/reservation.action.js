import { Day } from "../../Services/class";
import { createAction } from "../../Services/helper";
import { RESERVATION_ACTION_TYPE } from "./reservation.type";



export const addNewReservation = (state, reservation) => {

    const existingDay = state.find(day => day.date === reservation.dateValue)

    if(!existingDay){
        const newDay = new Day(reservation.dateValue)
        state.push(newDay)
    }

    const temp = state.map(day => {

        if(day.date === reservation.dateValue){

            const newDay = {...day}

            if(reservation.service === 'Midi'){
                newDay.Midi.reservationArray.push(reservation)
                newDay.Midi.placeLeft -= reservation.number
            } else {
                newDay.Soir.reservationArray.push(reservation)
                newDay.Soir.placeLeft -= reservation.number
            }

            return newDay
        }
        return day
    })

    return createAction(RESERVATION_ACTION_TYPE.ADD_NEW_RESERVATION, temp)
}

export const confirmReservation = (state, reservationToConfirm) => {

    const { id: idToConfirm, service } = reservationToConfirm

    const newState = state.map(day => {                                     /// ON MAP LE STATE
        if(day.date === reservationToConfirm.dateValue){                    /// SI LE JOUR CORRESPOND
            const newServRes = day[service].reservationArray.map(res => {   //// ON MAP LE TABLEAU DE RESERVATION DU SERVICE
                if(res.id === idToConfirm){                                  /// SI ID CORRESPOND ON RENVOIE UN NOUVEL OBJET AVEC ISCONFIRM A TRUE
                    return {...res, isConfirmed: true}
                }
                return res                                                   //// SINON ON RENVOIE LOBJET TELQUEL
            })
            const newServ = {...day[service], reservationArray: [...newServRes]} /// ON CREE UN NOUVEL OBJET SERVICE EN SPREADANT LANCIEN AVEC LE NOUVEAU RESERVATIONARRAY
            return {...day, [service]: {...newServ}}                /// ON RETURN UN OBJET DAY EN SPREADANT LANCIEN ET LE NOUVEAU SERVICE MAPPE
        }

        return day
    })
    
    return createAction(RESERVATION_ACTION_TYPE.CONFIRM_RESERVATION, newState)
}

export const CancelReservation = (state, reservationToCancel) => {

    const { service,  id: idToCancel, number: placeToAdd } = reservationToCancel

    const newState = state.map(day => {
        if(day.date === reservationToCancel.dateValue){

            const newServRes = day[service].reservationArray.filter(res => res.id !== idToCancel)
            const newPlaceLeft = Number(day[service].placeLeft) + Number(placeToAdd)
            const newServ = {reservationArray: [...newServRes], placeLeft: newPlaceLeft }

            return {...day, [service]: {...newServ}}
        }

        return day
    })

    return createAction(RESERVATION_ACTION_TYPE.DELETE_RESERVATION, newState)
}