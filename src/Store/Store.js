import {createStore} from 'redux';
import reducer from '../Store/CombineReducer'
// import combineReducers from '../Store/CombineReducer'

const devToolExtention =
   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(reducer, devToolExtention)

export default store