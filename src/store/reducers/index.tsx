import { combineReducers } from "redux";
import {QuestionReducer} from "./questionReducers"

const rootReducer = combineReducers({
    questionReducer:QuestionReducer
})

export type ApplicationState = ReturnType<typeof rootReducer>;

export {rootReducer}