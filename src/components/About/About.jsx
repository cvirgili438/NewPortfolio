import React from 'react'
import { hideToView } from '../../utils/function';
import { aboutEN, aboutES } from '../../utils/stringConst';
import s from './About.module.css'


export default function About(props) {

    React.useEffect(()=>{
        hideToView({
          english:props.english,
          idES:'aboutES',
          idEN:'aboutEN'
        }) 
      
       },[props.english])

  return (
    <div className={s.about_container}>
        <span id='aboutES'>{aboutES}</span>
        <span id='aboutEN' >{aboutEN}</span>
        {}
    </div>
  )
}
