import { Fragment, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getReservationSelector } from "../../store/reservation/reservation.selector"
import Header from '../../Component/Header/header'
import PageContainer from '../../Component/Page-Container/pageContainer'
import { getCurrentUserSelector } from "../../store/user/user.selector"
import Form from "../../Component/Form/form"
import Input from "../../Component/Input/input"
import { updateUserInfo } from "../../Services/firebase"
import { updateCurrentUser } from "../../store/user/user.action"
import { useNavigate } from "react-router-dom"

const Account = () => {

    const reservation = useSelector(getReservationSelector)
    const currentUser = useSelector(getCurrentUserSelector)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [ fields, setFields ] = useState(currentUser)
    const headerContent = {
        imgUrl: 'https://images.unsplash.com/photo-1471253794676-0f039a6aae9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
        h1: 'Gestion de votre compte',
        title: 'Vos paramètres',
        subTitle: 'Vous pouvez ici changer les informations de votre compte',
        content: 'N\'oubliez pas de cliquer sur le bouton VALIDER en bas de la page pour sauvegarder vos modifications.'
    }

    const onChangeHandler = (event) => {
        const { name, value } = event.target
        setFields({...fields, [name]: value})
    }    

    const onSubmitHandler = async (event) => {
        event.preventDefault()
        console.log('on rentre dans submitHandler : ', fields)
        const resp = await updateUserInfo(currentUser.uid, fields)
        console.log('resp : ', resp)
        if(resp === undefined){
            dispatch(updateCurrentUser({...fields, uid: currentUser.uid}))
            navigate('/confirmation')
        }
    }

    return (
        <Fragment>
            <Header headerContent={headerContent}/>
            <PageContainer>
            {Object.keys(currentUser).length ? (
                <Form buttonText={'Appliquez les modifications'} submitHandler={onSubmitHandler}>
                    <Input name={'lastName'} label={'Votre nom'} value={fields.lastName} onChange={onChangeHandler}/>
                    <Input name={'firstName'} label={'Votre prénom'} value={fields.firstName} onChange={onChangeHandler}/>
                    <Input name={'phone'} label={'Votre numéro de téléphone'} value={fields.phone} onChange={onChangeHandler}/>
                </Form>
            ) : (
                <h3>Vous n'êtes pas connecté</h3>
            )}
            </PageContainer>
        </Fragment>
    )
}

export default Account