import { useState } from 'react'
import { getFormatedDate } from '../../Services/helper'
import Button from '../Button/button'
import InputSelector from '../Input-Selector/inputSelector'
import Input from '../Input/input'
import { ReservationFormContainer, ReservationFormBase } from './reservationForm.style'
import { addNewReservation } from '../../store/reservation/reservation.action'
import { useDispatch, useSelector } from 'react-redux'
import { getReservationSelector } from '../../store/reservation/reservation.selector'


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
        const reservation = {...fields, dateValue}
        dispatch(addNewReservation(temp, reservation))
    }

    const dateChangeHandler = (event) => {
        const { value } = event.target
        setDateValue(value)
    }

    return (
        <ReservationFormContainer>
            <ReservationFormBase>
                {Object.entries(fields).map((item, index) => {
                    return (<Input key={index} value={item[1]} name={item[0]} onChange={onChangeHandler}/>)
                })}
                <Input type='date' min={today} max={maxDayReservation} value={dateValue} onChange={dateChangeHandler}/>
                <InputSelector optionList={optionList}/>
                <Button  clickHandler={confirmHandler}>Confirmer</Button>
            </ReservationFormBase>
        </ReservationFormContainer>
    )
}

export default ReservationForm