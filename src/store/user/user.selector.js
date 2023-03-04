import { $CombinedState } from "redux"

export const getCurrentUserSelector = state => {
    return state.user.currentUser
}