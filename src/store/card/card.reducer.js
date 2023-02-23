import card_array from '../../card_array.json'
import { CARD_ACTION_TYPE } from './card.type'


export const CardReducer = (state = card_array, action) => {

    const { type, payload } = action

    switch(type){
        case CARD_ACTION_TYPE.SET_CARD:
            return{
                ...payload
            }
        default:
            return state
    }
}