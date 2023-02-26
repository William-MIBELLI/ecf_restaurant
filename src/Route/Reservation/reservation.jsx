import { Fragment } from 'react'
import {} from './reservation.style'
import Header from '../../Component/Header/header'
import ReservationForm from '../../Component/Reservation-Form/reservationForm'
import PageContainer from '../../Component/Page-Container/pageContainer'

const Reservation = () => {

    const headerContent = {
        imgUrl : 'https://images.unsplash.com/photo-1559339352-11d035aa65de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
        h1: 'Réservez Votre table',
        title: 'Envie d\'une pause gourmande ?',
        subTitle: 'Vous êtes au bon endroit !',
        content: 'Remplissez simplement le formulaire ci-dessous afin que nous puissions préparer au mieux votre arrivée. Vous pouvez réserver en tant qu\'invité ou créez un compte sur notre site, c\'est gratuit !'

    }

    return (
        <Fragment>
            <Header headerContent={headerContent}/>
            <PageContainer>
                <ReservationForm/>
            </PageContainer>
        </Fragment>
    )
}

export default Reservation