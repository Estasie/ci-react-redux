import settingsReducer from "./settingsReducer";
import {combineReducers} from "redux";

const allReducers = combineReducers({
    settings: settingsReducer
})

export default allReducers;