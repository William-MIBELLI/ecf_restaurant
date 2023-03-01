import { useState } from 'react';
import Form from '../Form/form';
import Input from '../Input/input';
import { CreationContainer } from './AdminCreation.style'
import { ADMIN_CONTENT_TYPE } from '../../Route/Admin/admin';
import { useDispatch } from 'react-redux';
import { addNewMenu } from '../../store/menu/menu.action';
import { addNewPlate } from '../../store/card/card.action';
import InputSelector from '../Input-Selector/inputSelector';
import { getEmptyObject } from '../../Services/helper';

const AdminCreation = ({ state, type, emptyObject }) => {

    const [ fields, setFields ] = useState({...emptyObject})
    const dispatch = useDispatch()

    const onChangehandler = (event) => {
        const { name, value } = event.target
        setFields({...fields, [name]: value})
    }

    const onSubmitHandler = (event) => {
        event.preventDefault()
        switch(type){
            case ADMIN_CONTENT_TYPE.MENU:
                dispatch(addNewMenu(state, fields))
                setFields({...getEmptyObject(fields)})
                break;
            case ADMIN_CONTENT_TYPE.PLATE:
                dispatch(addNewPlate(state, fields))

                ///////////////// A FIX, REMETRE LE INPUTSELECTOR SUR DEFAULT UNE FOIS QUON A SUBMIT  /////////////
                
                const currentType = fields.type
                setFields({...getEmptyObject(fields), type: currentType})
                break;
            default:
                return false
        }                  


    }

    return (
        <CreationContainer>
            <Form buttonText={'Ajouter'} submitHandler={onSubmitHandler}>
                {Object.entries(fields).map(([key, value]) => {
                    if(key !== 'id'){
                       return key === 'type' 
                        ? (<InputSelector required optionList={['starter', 'main', 'dessert']} label={key} name={key} onChange={onChangehandler}/>) 
                        : (<Input type={key === 'price' ? 'number' : 'text'} name={key} label={key} value={value} onChange={onChangehandler}/>)
                    }
                } )}
            </Form>
        </CreationContainer>
    )
}

export default AdminCreation

// <Input type={key === 'price' ? 'number' : 'text'} name={key} label={key} value={value} onChange={onChangehandler}/>