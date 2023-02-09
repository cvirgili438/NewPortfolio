import React from 'react'
import {  useSelector } from 'react-redux'
import { hideToView } from '../../utils/function'
import s from './LandingPage.module.css'
import About from '../About/About'
import ContactMe from '../ContactMe/ContactMe'
import Skills from '../Skills/Skills'
import whatsApp from '../../utils/whatsapp/ChatOnWhatsAppButton/WhatsAppButtonGreenSmall.png'
import gmail from '../../utils/gmail/gmail.png'
import linkedIn from '../../utils/LinkedIn/LI-Logo.png'
import pdf from '../../utils/PDF_file_icon.png'
import Project from '../Project/Project'

export default function LandingPage() {
 
  const english = useSelector(state =>state.english)
  React.useEffect(()=>{
    hideToView({
      english:english,
      idES:'sendES',
      idEN:'sendEN'
    })
    hideToView({
      english:english,
      idES:'languageES',
      idEN:'languageEN'
    })
    hideToView({
      english:english,
      idES:'h1ContactMeES',
      idEN:'h1ContactMeEN'
    })

  },[english])
 
  return (
    <div style={{marginTop:'6rem'}}>
      
      <section id='about'>
        <h1 id='languageEN' className={s.language}> You can change the language<br/> in the navbar </h1>
        <h1 id='languageES' className={s.language}> Puedes cambiar el lenguaje <br/>en la barra de navegación </h1>
        <About english={english} />
        </section>
      <section id='skills' >
        <Skills />
      </section>
      <section id='project'>
      <Project />
      </section>
      <hr/>
      <section id='contact' className='section_contact' >
        <h1 id='h1ContactMeEN' className={s.h1Contact} >Contact me through  :</h1>
        <h1 id='h1ContactMeES'  className={s.h1Contact} >Contactame via :</h1>
        <div className='hidden'>
          <div className={s.div_contact_icons}>
          <div className='rols'>
                <div className='hidden rol'>
            <a 
            href="https://wa.me/543537585662?text=Carlos Virgili FullStack Developer"
            target="_blank"
            rel='noreferrer'
            ><img className="wp" src={whatsApp} alt="WhatsApp"   /></a>
            </div>
            <div className='algo hidden rol' >
                <img className="logoss" src={gmail} alt='gmail' />
                <h1  > cvirgili438@gmail.com</h1>
            </div>
            <div className='hidden rol'>
            <a href="https://www.linkedin.com/in/carlos-adrian-virgili-nater-8247a118b/"   
            target="_blank"
            rel='noreferrer'  ><img className="logoss" src={linkedIn} alt='LinkedIn'  /></a>
            </div>
            <div className="hidden rol">
                    <div>                        
                        <a href={'/CV Carlos Virgili SoyHenry New.pdf'} target="_blank" rel="noopener noreferrer" >
                        <   img className="logoss" src={pdf + "#toolbar=0&navpanes=0&scrollbar=0"}  alt="PDF thumbnail" />
                         </a>
                    </div>
                    <a href={'/CV Carlos Virgili SoyHenry New.pdf'} target="_blank" rel="noopener noreferrer" className={s.none} ><h1   > Curriculum Vitae</h1>    </a>
                    </div>       
                    </div>
          </div>
          <h1 id='sendES' className={s.sendMe} >Escribeme un mail aqui</h1>
          <h1 id='sendEN' className={s.sendMe}>Send me a mail here</h1>
          <ContactMe />

        </div>
        </section>
      
      
      
      
    </div>
  )
}
