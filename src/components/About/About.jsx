import React from 'react'
import { hideToView } from '../../utils/function';
import { aboutEN, aboutES } from '../../utils/stringConst';
import s from './About.module.css'
import image from '../../utils/perfil.jpeg'


export default function About(props) {
    const [more,setMore]=React.useState(false)
    React.useEffect(()=>{
        hideToView({
          english:props.english,
          idES:'aboutES',
          idEN:'aboutEN'
        }) 
        hideToView({
          english:more,
          idES:'seeMoreEN',
          idEN:'seeEN'
        })
        hideToView({
          english:more,
          idES:'seeMoreES',
          idEN:'seeES'
        })
       },[props.english,more])
       const seeMoreEs = aboutES.slice(0,150)
       const seeMoreEN= aboutEN.slice(0,150).concat('...')
       const handleMore = ()=>setMore(!more)
  return (
    <div className={s.about_container}>
      <div>
        <img className={s.image_profile} src={image} alt='ProfileIMG'  />
        </div>
      
        <div className={s.div_about} id='aboutES'>
          <h2 className={s.machine_ES}>¡Hola! Soy Carlos,<br/>Soy un Full Stack Web Developer</h2>
          <div>
            <h3 className={s.h3_complete} id='seeMoreES'>{seeMoreEs}</h3>            
            <h3 className={s.h3_complete} id='seeES'>{aboutES}</h3>
            <h3 onClick={handleMore} className={s.h3_click}>{more?'Ver menos':'Ver Mas'}</h3>
          </div>
          </div>
        <div id='aboutEN' className={s.div_about}>
          <h1 className={s.machine_ES}>Hello! My name is Carlos, <br/>I am a Full Stack Web Developer.</h1>
          <div>
            <h3 className={s.h3_complete} id='seeMoreEN'>{seeMoreEN}</h3>            
            <h3 className={s.h3_complete} id='seeEN'>{aboutEN}</h3>
            <h3 onClick={handleMore} className={s.h3_click}>{more?'See Less':'See More'}</h3>
          </div>
        
        </div>
        
        {}
    </div>
  )
}
