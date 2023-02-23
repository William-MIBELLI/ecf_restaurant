import { SCHEDULE_ACTION_TYPE } from "./schedule.type"
import scheduleArray from '../../schedule_array.json'

export const ScheduleReducer = (state = scheduleArray, action) =>{
    const { type, payload } = action

    switch(type){
        case SCHEDULE_ACTION_TYPE.UPDATE_DAY:
            return {
                ...state,
                ...payload
            }
        default:
            return state
    }
}