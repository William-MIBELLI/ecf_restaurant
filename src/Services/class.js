export class ServiceReservation 
{
    id = null
    date = null
    placeLeft = 50;
    reservationArray = []

    constructor(id, date){
        this.id = id
        this.date = date
    }
}

export class ServiceType
{
    id = null
    name = null
    sericeReservationArray = []

    constructor(id, name){
        this.id = id
        this.name = name;
    }
}

export class Day{
    id = Math.random()
    date = null

    Midi = {reservationArray: [], placeLeft: 50}
    Soir = {reservationArray: [], placeLeft: 50}

    constructor(date){
        this.date = date
    }
}