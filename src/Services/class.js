export class DayReservation 
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