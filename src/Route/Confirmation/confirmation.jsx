import { useNavigate } from 'react-router-dom'
import { ConfirmationContainer, Icon, ConfirmationContent } from './confirmation.style'
import confirmIcon from '../../Asset/Icons/confirm.png'

const Confirmation = () => {

    const navigate = useNavigate()

    return (
        <ConfirmationContainer>
            <ConfirmationContent>
                <h3>Votre réservation est validée</h3>
                <Icon src={confirmIcon}/>
            </ConfirmationContent>
        </ConfirmationContainer>
    )
}

export default Confirmation