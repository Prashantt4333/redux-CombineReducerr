import { combineReducers } from "redux";
import AddSumReducer from "./AddSumReducer";
import { MulReducer } from "./MulReducer";




export default combineReducers({
    AddSumReducer : AddSumReducer,
    MulReducer :MulReducer
})