import { useState } from 'react'
import { getFormatedDate } from '../../Services/helper'
import Button from '../Button/button'
import InputSelector from '../Input-Selector/inputSelector'
import Input from '../Input/input'
import { ReservationFormContainer, ReservationFormBase } from './reservationForm.style'
import { addNewReservation } from '../../store/reservation/reservation.action'
import { useDispatch, useSelector } from 'react-redux'
import { getReservationSelector } from '../../store/reservation/reservation.selector'
import Form from '../Form/form'


const defaultFields = {
    lastName: 'NIEMIRO',
    firstName: 'William',
    email: 'william.mibelli@gmail.com',
    phoneNumber: '06-25-90-01-55',
    number: 0
}

const ReservationForm = () => {

    const today = getFormatedDate()
    const maxDayReservation = getFormatedDate(7)
    const optionList = [ 'Midi', 'Soir']
    const dispatch = useDispatch()
    const temp = useSelector(getReservationSelector)
    

    const [ fields, setFields ] = useState(defaultFields)
    const [ dateValue, setDateValue ] = useState(today)

    const onChangeHandler = (event) => {
        const { name, value } = event.target
        setFields({...fields, [name]: value})
    }

    const confirmHandler = (event) => {
        event.preventDefault()
        console.log('confirm OK');
        // const reservation = {...fields, dateValue}
        // dispatch(addNewReservation(temp, reservation))
    }

    const dateChangeHandler = (event) => {
        const { value } = event.target
        setDateValue(value)
    }

    return (
        <ReservationFormContainer>
        <Form submitHandler={confirmHandler} buttonText='Confirmer la réservation'>
            <Input value={fields.lastName} name={'lastName'} label={'Votre nom'} onChange={onChangeHandler}/>
            <Input value={fields.firstName} name={'firstname'} label={'Votre prénom'} onChange={onChangeHandler}/>
            <Input value={fields.email} name={'email'} label={'Votre Email'} onChange={onChangeHandler}/>
            <Input value={fields.phoneNumber} name={'phone'} label={'Votre numéro de téléphone'} onChange={onChangeHandler}/>
            <Input value={fields.number} name={'number'} label={'Nombre de places'} onChange={onChangeHandler}/>
            <Input  label={'Date'} type='date' min={today} max={maxDayReservation} value={dateValue} onChange={dateChangeHandler}/>
            <InputSelector label={'Horaire'} optionList={optionList}/>
        </Form>
        </ReservationFormContainer>
    )
}

export default ReservationForm