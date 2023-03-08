import { useState, useEffect } from 'react'
import { getFormatedDate } from '../../Services/helper'
import InputSelector from '../Input-Selector/inputSelector'
import Input from '../Input/input'
import { ReservationFormContainer } from './reservationForm.style'
import { addNewReservation, checkIfDayExists } from '../../store/reservation/reservation.action'
import { useDispatch, useSelector } from 'react-redux'
import { getReservationSelector } from '../../store/reservation/reservation.selector'
import Form from '../Form/form'
import { useNavigate } from 'react-router-dom'
import { getCurrentUserSelector } from '../../store/user/user.selector'
import { addReservationOnDb } from '../../Services/firebase'


const defaultFields = {
    lastName: '',
    firstName: '',
    mail: '',
    phone: '',
    number: 1,
    service: ''
}

const ReservationForm = () => {

    const today = getFormatedDate()
    const maxDayReservation = getFormatedDate(7)
    const optionList = [ 'Midi', 'Soir']
    const dispatch = useDispatch()
    const temp = useSelector(getReservationSelector)
    const navigate = useNavigate()
    const currentUser = useSelector(getCurrentUserSelector)
    

    const [ fields, setFields ] = useState(Object.keys(currentUser).length ? {...currentUser, number: 1} : defaultFields)
    const [ dateValue, setDateValue ] = useState(today)

    const onChangeHandler = (event) => {
        const { name, value } = event.target
        console.log(`changehandle ${name} ${value}`)
        setFields({...fields, [name]:  value})
    }

    const confirmHandler = async (event) => {
        event.preventDefault()
        const id = Math.random()
        const reservation = {...fields, dateValue, isConfirmed: false, id: id}
        //const resp = await checkIfDayExists(temp, reservation)
        if(true){
            console.log('on rentre dans le if ', fields)
            await addReservationOnDb(reservation, reservation.dateValue, 'Midi')
        }
    }

    const dateChangeHandler = (event) => {
        const { value } = event.target
        setDateValue(value)
    }

    useEffect(() => {
        setFields(Object.keys(currentUser).length ? {...currentUser, number: 1} : defaultFields)
    }, [currentUser])

    return (
        <ReservationFormContainer>
        <Form submitHandler={confirmHandler} buttonText='Confirmer la réservation'>
            <Input value={fields.lastName} name={'lastName'} label={'Votre nom'} onChange={onChangeHandler}/>
            <Input value={fields.firstName} name={'firstName'} label={'Votre prénom'} onChange={onChangeHandler}/>
            <Input value={fields.mail} name={'mail'} label={'Votre Email'} onChange={onChangeHandler}/>
            <Input value={fields.phone} name={'phone'} label={'Votre numéro de téléphone'} onChange={onChangeHandler}/>
            <Input value={fields.number} name={'number'} label={'Nombre de places'} onChange={onChangeHandler}/>
            <Input  label={'Date'} type='date' min={today} max={maxDayReservation} value={dateValue} onChange={dateChangeHandler}/>
            <InputSelector required name={'service'} label={'Horaire'} optionList={optionList} onChange={onChangeHandler}/>
        </Form>
        </ReservationFormContainer>
    )
}

export default ReservationForm