import { AdminItemContainer, AdminItemHeader, Arrow, AdminItemForm, AdminItemFormContainer } from './adminItem.style'
import Input from '../Input/input'
import Button, { BUTTON_TYPE } from '../Button/button'
import { useState } from 'react'
import arrow from '../../Asset/Icons/arrow.png'
import { ADMIN_CONTENT_TYPE } from '../../Route/Admin/admin'
import { useDispatch } from 'react-redux'
import { removeMenu, updateMenu } from '../../store/menu/menu.action'
import { removePlate, updatePlate } from '../../store/card/card.action'
import { updateDay } from '../../store/schedule/schedule.action'
import { deleteDataFromDb, updateDataFromDb } from '../../Services/firebase'
import ErrorMessage from '../Error-Message/errorMessage'


const AdminItem = ({ item, type, state }) => {

    const [ displayItem, setDisplayItem ] = useState(false)
    const [ fields, setFields] = useState({...item})
    const [ error, setError ] = useState('')
    const { name, id } = item
    const dispatch = useDispatch()

    const onClickhandler = () => {
        setDisplayItem(!displayItem)
    }

    const onChangeHandler = (event) => {
        const { name, value } = event.target
        setFields({...fields, [name]: value})
    }

    const onDeleteClick = async () => {
        if(window.confirm('etes vous sûr ?')){
            switch(type){
                case ADMIN_CONTENT_TYPE.MENU:
                    try{
                        await deleteDataFromDb('menus', id)
                        return dispatch(removeMenu(state, fields))
                    }catch(error){
                        return setError('Une erreur s\'est produite')
                    }
                case ADMIN_CONTENT_TYPE.PLATE:
                    try{
                        await deleteDataFromDb('card', id)
                        return dispatch(removePlate(state, fields))
                    }catch(error){
                        return setError('Une erreur s\'est produite')
                    }
                default:
                    return setError('Une erreur s\'est produite')
            }       
        }
    }

    const onUpdateClick = async (event) => {
        event.preventDefault()
        console.log('update click OK')
        switch(type){
            case ADMIN_CONTENT_TYPE.MENU:
                try{
                    await updateDataFromDb('menus', fields, id)
                }catch(error){
                    console.log('erreur depuis admin : ', error)
                }
                return dispatch(updateMenu(state, fields))
            case ADMIN_CONTENT_TYPE.PLATE:
                try{
                    await updateDataFromDb('card', fields, id)
                }catch(error){
                    console.log('erreur : ', error)
                }
                return dispatch(updatePlate(state, fields))
            case ADMIN_CONTENT_TYPE.SCHEDULE:
                try{
                    await updateDataFromDb('schedule', fields, id)
                }catch(error){
                    console.log('erreur : ', error)
                }
                return dispatch(updateDay(state, fields))
            default:
                return false
        }
    }

    return (
        <AdminItemContainer>
        <AdminItemHeader  onClick={onClickhandler}>
            <h3>{name}</h3>
            <Arrow src={arrow}/>
        </AdminItemHeader>
            {displayItem && (
                <AdminItemFormContainer onSubmit={onUpdateClick}>
                    <AdminItemForm buttonText={'Mettre à jour'}>
                        {Object.entries(fields).map(([key, val], index) => key !== 'id' && (
                            <Input type={key === 'price' ? 'number' : 'text'} disabled={key === 'type'} label={key} name={key} value={val} onChange={onChangeHandler} />
                        ))}
                    </AdminItemForm>
                    {type !== ADMIN_CONTENT_TYPE.SCHEDULE && (
                        <Button look={BUTTON_TYPE.delete} clickHandler={onDeleteClick}>Supprimer</Button>
                    )}
                </AdminItemFormContainer>

            )}
            {error !== '' && (
                <ErrorMessage>{error}</ErrorMessage>
            )}
        </AdminItemContainer>
    )
}

export default AdminItem