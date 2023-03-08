import { SCHEDULE_ACTION_TYPE } from "./schedule.type"
import scheduleArray from '../../schedule_array.json'

const defaultSchedule = {
    schedule: [

    ]
}

export const ScheduleReducer = (state = defaultSchedule, action) =>{
    const { type, payload } = action

    switch(type){
        case SCHEDULE_ACTION_TYPE.UPDATE_DAY:
            return {
                schedule: [...payload]
            }
        case SCHEDULE_ACTION_TYPE.INITIALIZE_SCHEDULE:
            return{
                schedule: [...payload]
            }
        default:
            return state
    }
}