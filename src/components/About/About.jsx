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
            <h3 className={s.h3_complete} id='seeES'>Desde chico me gustaba mucho la tecnología, pero, ¡las ciencias como la química también me gustaban! Decidí ir por el rumbo la química, probe unos años, actualmente estoy en tercer año de ingeniería química, pero sentía que me faltaba algo trabajando y estudiando química;ahí fue cuando conocí a Soy Henry, aquí pude reinventarme, conocerme a mí mismo nuevamente, aquí salieron a flote todas mis pasiones.<br/><br/>Durante mi curso con Henry, tuve la oportunidad de aprender no solo sobre tecnologías como JavaScript, React y Node.js, entre otras, sino también sobre el ámbito laboral en el que me desempeñaré en el futuro. Me enseñó a enfrentar y resolver problemas de manera eficaz.<br/><br/>Durante el curso, se nos presentaron varias tareas y pruebas de filtro, que debíamos resolver dentro de un tiempo límite. Aprendí a manejar las llamadas 'deadlines' o fechas de entrega, y a trabajar bajo presión, ya que debía ajustar mis tiempos para poder entregar todo a tiempo mientras trabajaba y estudiaba. En resumen, mi curso con Henry me brindó una experiencia desafiante y enriquecedora, y estoy agradecido por las habilidades y conocimientos que adquirí.</h3>
            <h3 onClick={handleMore} className={s.h3_click}>{more?'Ver menos':'Ver Mas'}</h3>
          </div>
          </div>
        <div id='aboutEN' className={s.div_about}>
          <h1 className={s.machine_ES}>Hello! My name is Carlos, <br/>I am a Full Stack Web Developer.</h1>
          <div>
            <h3 className={s.h3_complete} id='seeMoreEN'>{seeMoreEN}</h3>            
            <h3 className={s.h3_complete} id='seeEN'>Ever since I was a child, I have had a passion for technology, but I also liked sciences such as chemistry.<br/><br/> I decided to go into the chemistry field and studied it for a few years, I am currently in my third year of chemical engineering, but I felt like something was missing. That's when I discovered Soy Henry, it allowed me to reinvent myself, to get to know myself again and to bring out all my passions.<br/> <br/>During my course with Henry, I had the opportunity to learn not only about technologies such as JavaScript, React and Node.js, among others, but also about the working field in which I will perform in the future. The course taught me how to face and solve problems effectively.<br/> <br/>During the course, we were presented with several tasks and filtering tests that we had to solve within a time limit. I learned how to handle 'deadlines' and work under pressure, as I had to adjust my times to be able to deliver everything on time while working and studying. In summary, my course with Henry gave me a challenging and enriching experience, and I am grateful for the skills and knowledge that I acquired.</h3>
            <h3 onClick={handleMore} className={s.h3_click}>{more?'See Less':'See More'}</h3>
          </div>
        
        </div>
        
        {}
    </div>
  )
}
