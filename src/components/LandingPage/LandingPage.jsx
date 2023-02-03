import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changeLanguage } from '../../Redux/Action'
import About from '../About/About'

export default function LandingPage() {
  const dispatch = useDispatch()
  const english = useSelector(state =>state.english)
  const handleLanguage = ()=>{
    dispatch(changeLanguage(!english))
  }
  return (
    <div style={{marginTop:'5rem'}}>
      
      <section id='about'><About english={english} /></section>
      <section></section>
      
      <section><h1 className='hidden'>hola<button onClick={(handleLanguage)}>ENG</button></h1></section>
      <section><h1 className='hidden'>algo</h1></section>
      
      
      
    </div>
  )
}
