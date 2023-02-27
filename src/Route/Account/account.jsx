import { useSelector } from "react-redux"
import { getReservationSelector } from "../../store/reservation/reservation.selector"

const Account = () => {

    const reservation = useSelector(getReservationSelector)
    console.log('reservation : ', reservation)

    return (
        <div>
            Je suis ACCOUNT
        </div>
    )
}

export default Account