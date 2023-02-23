import { combineReducers } from "redux";
import { CardReducer } from "./card/card.reducer";
import { MenuReducer } from "./menu/menu.reducer";
import { ScheduleReducer } from "./schedule/schedule.reducer";

export const rootReducer = combineReducers({
    card: CardReducer,
    menu: MenuReducer,
    schedule: ScheduleReducer
})