import { createAction } from "../../Services/helper"
import { SCHEDULE_ACTION_TYPE } from "./schedule.type"

export const updateDay = (state, dayToUpdate) => {
    const newState = state.map(day => {
        return day.name === dayToUpdate.name ? dayToUpdate : day
    })

    return createAction(SCHEDULE_ACTION_TYPE.UPDATE_DAY, newState)
}

export const initializeSchedule = (schedule) => {
    return createAction(SCHEDULE_ACTION_TYPE.INITIALIZE_SCHEDULE, schedule)
}