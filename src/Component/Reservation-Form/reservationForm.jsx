import { useState, useEffect } from 'react'
import { getFormatedDate } from '../../Services/helper'
import InputSelector from '../Input-Selector/inputSelector'
import Input from '../Input/input'
import { ReservationFormContainer } from './reservationForm.style'
import { useSelector } from 'react-redux'
import Form from '../Form/form'
import { useNavigate } from 'react-router-dom'
import { getCurrentUserSelector } from '../../store/user/user.selector'
import { addReservationOnDb, getPlaceLeftFromDb } from '../../Services/firebase'


const defaultFields = {
    lastName: '',
    firstName: '',
    mail: '',
    phone: '',
    number: '',
    service: ''
}

const ReservationForm = () => {

    const today = getFormatedDate()
    const maxDayReservation = getFormatedDate(7)
    const optionList = [ 'Midi', 'Soir']
    const navigate = useNavigate()
    const currentUser = useSelector(getCurrentUserSelector)
    

    const [ fields, setFields ] = useState(Object.keys(currentUser).length ? {...currentUser, service : '', number: ''} : defaultFields)
    const [ dateValue, setDateValue ] = useState(today)
    const [ disabledButton, setDisabledButton ] = useState(false)
    const [ placeLeft, setplaceLeft ] = useState(undefined)

    const onChangeHandler = (event) => {
        const { name, value } = event.target
        setFields({...fields, [name]:  value})
    }

    const confirmHandler = async (event) => {
        event.preventDefault()

        if(fields.number > placeLeft){
            console.log('impossible de réserver')
            return false
        }

        const id = Math.random()
        const reservation = {...fields,date:  dateValue, isConfirmed: false, id: id}
        try{
            await addReservationOnDb(reservation, reservation.id)
            navigate('/confirmation')
        }catch(error){
            console.log('error : ', error)
        }
    }

    const dateChangeHandler = (event) => {
        const { value } = event.target
        setDateValue(value)
    }
    

    useEffect(() => {
        setDisabledButton(!Object.values(fields).some(item => item.trim() === '' || item === undefined))
    },[fields])

    useEffect(() => {
        const calldB = async (dateValue, service) => {
            const resp = await getPlaceLeftFromDb(dateValue, service)
            setplaceLeft(resp)
        }
        calldB(dateValue, fields.service)
    },[fields.service, dateValue])


    return (
        <ReservationFormContainer>
        <Form submitHandler={confirmHandler} buttonText='Confirmer la réservation' disabledB={disabledButton}>
            <Input value={fields.lastName} name={'lastName'} label={'Votre nom'} onChange={onChangeHandler}/>
            <Input value={fields.firstName} name={'firstName'} label={'Votre prénom'} onChange={onChangeHandler}/>
            <Input value={fields.mail} name={'mail'} label={'Votre Email'} onChange={onChangeHandler}/>
            <Input value={fields.phone} name={'phone'} label={'Votre numéro de téléphone'} onChange={onChangeHandler}/>
            <Input  label={'Date'} type='date' min={today} max={maxDayReservation} value={dateValue} onChange={dateChangeHandler}/>
            <InputSelector required name={'service'} label={'Horaire'} optionList={optionList} onChange={onChangeHandler}/>
            <InputSelector required name={'number'} label={'Nombre de couverts'} optionList={[1,2,3,4,5,6,7,8,9]} onChange={onChangeHandler}/>
        </Form>
        {fields.service.trim() !== '' && (
            <div>Places restantes : {placeLeft} </div>
        )}
        </ReservationFormContainer>
    )
}

export default ReservationForm