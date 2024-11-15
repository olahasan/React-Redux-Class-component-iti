import {CURENT_LANGUAGE} from './Types'


const CurrentLangReducer = (state = 'en', action) => {
   switch(action.type){
     case CURENT_LANGUAGE :
   //   case 'CURENT_LANG':
      return action.payload ;
     default:
      return state ;
   }
}

export default CurrentLangReducer ;