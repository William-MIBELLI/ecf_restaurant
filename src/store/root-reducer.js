import { combineReducers } from "redux";
import { CardReducer } from "./card/card.reducer";
import { MenuReducer } from "./menu/menu.reducer";
import { Reservationreducer } from "./reservation/reservation.reducer";
import { ScheduleReducer } from "./schedule/schedule.reducer";
import { UserReducer } from "./user/user.reducer";

export const rootReducer = combineReducers({
    card: CardReducer,
    menu: MenuReducer,
    schedule: ScheduleReducer,
    reservation: Reservationreducer,
    user: UserReducer
})