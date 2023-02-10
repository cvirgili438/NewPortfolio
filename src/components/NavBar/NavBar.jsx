import React from 'react'
import style from './NavBar.module.css'
import { BsMenuUp } from "react-icons/bs";
//import { animateScroll as scroll } from "react-scroll";
import { Link } from "react-scroll";
import { BiHomeHeart } from "react-icons/bi";
import { AiOutlineClose,AiOutlineCopy,AiOutlinePhone } from "react-icons/ai";
import { BsArchive } from "react-icons/bs";

import { GrLanguage } from "react-icons/gr";
import { useDispatch, useSelector } from 'react-redux';
import { changeLanguage } from '../../Redux/Action'
import { hideToView } from '../../utils/function';



export default function NavBar() {
    const [active,setActive] = React.useState(false)
    const dispatch = useDispatch()
    const handleShow = ()=>{
        setActive(!active)
    }    
    const english = useSelector(state=>state.english)
    const handleLanguage = ()=>{
        dispatch(changeLanguage(!english))
        setActive(!active)
      }
      React.useEffect(()=>{
        hideToView({
          english:english,
          idES:'aboutLiES',
          idEN:'aboutLiEN'
        }) 
        hideToView({
            english:english,
            idES:'languageLiES',
            idEN:'languageLiEN'
        })
        hideToView({
            english:english,
            idES:'skillsES',
            idEN:'skillsEN'
        })
        hideToView({
            english:english,
            idES:'contactES',
            idEN:'contactEN'
        })
        hideToView({
            english:english,
            idES:'projectES',
            idEN:'projectEN'
        })
      
       },[english])
  return (
    <header className={style.nav}>
      
        <nav className={style.nav_container}>
        <Link className={style.nav_logo} to='about' smooth={true}>
            Carlos
        </Link> 
            {active ? <AiOutlineClose onClick={handleShow} className={style.nav_close}/> :<BsMenuUp onClick={handleShow} className={style.nav_close}/> }
            
            <div className={`${style.nav_menu} ${active ? style.show_menu : ''}`} id='nav_menu' >
            
            <ul className={style.nav_ul}>
                <li className={style.nav_li} id='aboutLiEN' >
                    <Link className={style.nav_link} onClick={handleShow} to='about' smooth={true}>                        
                    <BiHomeHeart  className={style.nav_icon} />About Me
                    </Link></li>
                <li className={style.nav_li} id='aboutLiES' >
                    <Link className={style.nav_link} onClick={handleShow} to='about' smooth={true}>                        
                    <BiHomeHeart  className={style.nav_icon} />Sobre Mi
                    </Link></li>

                <li className={style.nav_li} id='skillsES'>
                    <Link className={style.nav_link} onClick={handleShow} to='skills' smooth={true}>                        
                    <AiOutlineCopy  className={style.nav_icon} />Habilidades
                </Link></li>
                <li className={style.nav_li} id='skillsEN'>
                <Link className={style.nav_link} onClick={handleShow} to='skills' smooth={true}>                        
                    <AiOutlineCopy  className={style.nav_icon} />Skills
                </Link></li>
                <li className={style.nav_li} id='contactEN'>
                <Link className={style.nav_link} onClick={handleShow} to='contact' smooth={true}>                        
                    <AiOutlinePhone  className={style.nav_icon} />Contact Me
                </Link>
                </li>
                <li className={style.nav_li}id='contactES'>
                <Link className={style.nav_link} onClick={handleShow} to='contact' smooth={true}>                        
                    <AiOutlinePhone  className={style.nav_icon} />Contactame
                </Link>
                </li>
                <li className={style.nav_li}id='projectES'>
                <Link className={style.nav_link} onClick={handleShow} to='project' smooth={true}>                        
                    <BsArchive  className={style.nav_icon} />Proyectos
                </Link>
                </li>
                <li className={style.nav_li}id='projectEN'>
                <Link className={style.nav_link} onClick={handleShow} to='project' smooth={true}>                        
                    <BsArchive  className={style.nav_icon} />Projects
                </Link>
                </li>
                <li onClick={handleLanguage} id='languageLiES' className={style.nav_li}><GrLanguage className={style.nav_icon}/>{'Cambiar idioma'}</li>
                <li onClick={handleLanguage} id='languageLiEN' className={style.nav_li}><GrLanguage className={style.nav_icon}/>{'Change Language'}</li>
                
            </ul>
            
            </div>
        </nav>
    </header>
  )
}
