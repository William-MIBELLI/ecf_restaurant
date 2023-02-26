export const getFormatedDate = (increment = 0) => {

    const date = new Date(new Date().setDate(new Date().getDate() + increment))
    const day = date.getDate().toString().padStart(2, '0')
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const year = date.getFullYear()

    return `${year}-${month}-${day}`   
}

export const createAction = (type, payload) => {
    const action = {type: type, payload: payload}
    return action
}