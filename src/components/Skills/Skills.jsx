import React from 'react'
import s from './Skills.module.css'
import { AiOutlineDownCircle,AiOutlineCode } from "react-icons/ai";
export default function Skills() {

    const [show,setShow]= React.useState(false)
    const handleShow = ()=>{
        setShow(!show)
    }
  return (
    <section className={s.section_container}>
       <div className={s.div_superior}>
            <h1>Skills</h1>            
        </div>
        <div className={s.div_skills} >
            <AiOutlineCode className={s.arrow_down} />
            <div>
                <h1>Spread it </h1>
            </div>
        <AiOutlineDownCircle className={s.arrow_down}/>
        </div>
        {/* aqui es el display de los skills*/}
        <div>
        
        </div>
        <div>

        </div>
    </section>
  )
}
