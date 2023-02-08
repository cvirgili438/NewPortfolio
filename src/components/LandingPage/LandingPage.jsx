import React from 'react'
import {  useSelector } from 'react-redux'

import About from '../About/About'
import ContactMe from '../ContactMe/ContactMe'
import Skills from '../Skills/Skills'

export default function LandingPage() {
 
  const english = useSelector(state =>state.english)
 
  return (
    <div style={{marginTop:'5rem'}}>
      
      <section id='about'><About english={english} /></section>
      <section id='skills' >
        <Skills />
      </section>
      
      <section id='contact' className='section_contact' >
        <div className='hidden'>
          
          <ContactMe />

        </div>
        </section>
      <section ><h1 className='hidden'>algo</h1></section>
      
      
      
    </div>
  )
}
