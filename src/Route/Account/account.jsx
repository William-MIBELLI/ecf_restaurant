import { Fragment } from "react"
import { useSelector } from "react-redux"
import { getReservationSelector } from "../../store/reservation/reservation.selector"
import Header from '../../Component/Header/header'

const Account = () => {

    const reservation = useSelector(getReservationSelector)
    console.log('reservation : ', reservation)

    const headerContent = {
        imgUrl: 'https://images.unsplash.com/photo-1471253794676-0f039a6aae9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        h1: 'Gestion de votre compte',
        title: 'Vos paramètres',
        subTitle: 'Vous pouvez ici changer les informations de votre compte',
        content: 'N\'oubliez pas de cliquer sur le bouton VALIDER en bas de la page pour sauvegarder vos modifications.'
    }

    return (
        <Fragment>
            <Header headerContent={headerContent}/>
        </Fragment>
    )
}

export default Account