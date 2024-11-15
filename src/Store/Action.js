import {CURENT_LANGUAGE} from './Types'

const CurrentLang = (payload) => (
    {
        type : CURENT_LANGUAGE,
        // type : 'CURENT_LANG',
        payload ,
    }
)

export default CurrentLang ;