import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import CurrentLang from './Store/Action'

function Home() {
    const language = useSelector(state=>state.lang);

    const dispatch = useDispatch();
    const changeLange = ()=>{
    dispatch(CurrentLang(language === 'ar' ? 'en' : 'ar'))
    }

  return (
    <div dir={language === 'ar' ? "rtl" : "ltr"} className={language === 'ar' ? "text-right" : "text-left"}>
        <p>THE LANGUAGE IS : {language}</p>
        <button onClick={changeLange}>click</button>
    </div>
  )
}

export default Home