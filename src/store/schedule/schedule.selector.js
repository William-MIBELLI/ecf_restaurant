
export const getScheduleSelector = state => {
    const sortSchedule =  state.schedule.schedule.sort((a,b) => a.id + b.id)
    return sortSchedule
}