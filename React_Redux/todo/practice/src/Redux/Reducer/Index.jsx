import { combineReducers } from "redux";
import changeTheNumber from "./upDpwm";
import todoOperation from "./TodoReducer";

const rootReducer=combineReducers({
    changeTheNumber,todoOperation
})
export default rootReducer;