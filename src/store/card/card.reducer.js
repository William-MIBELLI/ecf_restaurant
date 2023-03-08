import card_array from '../../card_array.json'
import { CARD_ACTION_TYPE } from './card.type'

const defaultCard = {
    card : [
        {
            id: '',
            name: '',
            type: '',
            imgUrl: '',
            ingredients: '',
            description: '',
            price: ''
        }
    ]
}

export const CardReducer = (state = defaultCard, action) => {

    const { type, payload } = action

    switch(type){
        case CARD_ACTION_TYPE.ADD_NEW_PLATE:
            return {
                card: [...payload]
            }
        case CARD_ACTION_TYPE.UPDATE_PLATE:
            return {
                card: [...payload]
            }
        case CARD_ACTION_TYPE.REMOVE_PLATE:
            return {
                card: [...payload]
            }
        case CARD_ACTION_TYPE.INITIALIZE_CARD:
            return{
                card: [...payload]
            }
        default:
            return state
    }
}