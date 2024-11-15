import { combineReducers } from "redux";
import CurrentLangReducer from '../Store/Reducer';
import CartReducer from '../Store/CartReducer'

export default combineReducers({
    lang : CurrentLangReducer,
    cart : CartReducer,
})