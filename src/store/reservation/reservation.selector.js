
export const getReservationSelector = state => {
    return state.reservation.reservations
}

export const getReservationSplittedByDay = state => {
    const OrganisedState = {}
    state.reservation.reservations.forEach(item => {
        if(!Object.keys(OrganisedState).includes(item.date)){
            OrganisedState[item.date] = []
        }
        OrganisedState[item.date] = [...OrganisedState[item.date], item]
    })

    return OrganisedState
}

export const getPlacesLeftSelector = (date, service) => state => {

    const filteredArray = state.reservation.reservations.filter(item => item.date === date && item.service === service)
    const placeLeft = filteredArray.reduce((total, current) => Number(total) + Number(current.number), 0)

    return placeLeft
}

export const getReservationNumber = (date, service) => state => {
    
    const filteredArray = state.reservation.reservations.filter(item => {
        return item.date === date && item.service === service
    })

    return filteredArray.length
}
