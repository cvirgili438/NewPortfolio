import React from 'react'
import s from './Skills.module.css'
import { AiOutlineDownCircle,AiOutlineCode } from "react-icons/ai";
import { hideToView } from '../../utils/function';
import { useSelector } from 'react-redux';
import { imgArrayBack,imgArrayFront } from '../../utils/stringConst';


export default function Skills() {
    
    const [show,setShow]= React.useState(false)
    const handleShow = (e)=>{
        let content = document.getElementById('skillsContent')
        e.preventDefault()  
                      
        setShow(!show)
        if(content.classList.contains(s.skill_hidden)){
            
            content.classList.remove(s.skill_hidden)
            content.classList.add(s.skill_show)
        }
        if(content.classList.contains(s.skill_show)){
            content.classList.remove(s.skill_show)
            content.classList.add(s.skill_hidden)
           
        }
        
    }
    const english = useSelector(state=>state.english)
    React.useEffect(()=>{
        hideToView({
            english:english,
            idES:'skillES',
            idEN:'skillEN'
        })
        let content = document.getElementById('skillsContent')
        if(show){
            content.classList.remove(s.skill_hidden)
            content.classList.add(s.skill_show)
        }
        if(!show){
            content.classList.remove(s.skill_show)
            content.classList.add(s.skill_hidden)
        }

    },[english,show])

  return (
    <section className={s.section_container}>
       <div className={s.div_superior}>
            <h1>Skills</h1>            
        </div>
        <div onClick={handleShow} className={s.div_skills} >
            <AiOutlineCode className={s.arrow_down} />
            <div id='skillES'>
                <h2>Abra para ver </h2>
            </div>
            <div id='skillEN' >
                <h2>Open to see </h2>
            </div>
        <AiOutlineDownCircle id='arrow' className={s.arrow_down}/>
        </div>
        {/* aqui es el display de los skills*/}
        <div  id='skillsContent' >
        <div className={s.div_front} >
        <h3>
            FrontEnd 
        </h3>   
        <section className={s.section_img}>
        {imgArrayFront.map((e,i)=>{
            return(
                <img key={'FrontImg'+i} src={e} alt={'imgNotFound'}/>
            )
        })}
        </section>
        </div>
        <div className={s.div_back}>
            <h3>BackEnd</h3>
            <section className={s.section_img} >
            {imgArrayBack.map((e,i)=>{
            return(
                <img key={'BackImg'+i} src={e} alt={'imgNotFound'}/>
            )
        })}
            </section>
        </div>
        </div>
    </section>
  )
}
