import React from 'react'
import style from './NavBar.module.css'
import { BsMenuUp } from "react-icons/bs";
//import { animateScroll as scroll } from "react-scroll";
import { Link } from "react-scroll";
import { BiHomeHeart } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { GrLanguage } from "react-icons/gr";
import { useDispatch, useSelector } from 'react-redux';
import { changeLanguage } from '../../Redux/Action'



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

  return (
    <header className={style.nav}>
      
        <nav className={style.nav_container}>
        <Link className={style.nav_logo} to='about' smooth={true}>
            Carlos
        </Link> 
            {active ? <AiOutlineClose onClick={handleShow} className={style.nav_close}/> :<BsMenuUp onClick={handleShow} className={style.nav_close}/> }
            
            <div className={`${style.nav_menu} ${active ? style.show_menu : ''}`} id='nav_menu' >
            
            <ul className={style.nav_ul}>
                <li className={style.nav_li} >
                    <Link className={style.nav_link} onClick={handleShow} to='about' smooth={true}>
                    <BiHomeHeart  className={style.nav_icon} />algo
                    </Link></li>
                <li className={style.nav_li}>para</li>
                <li className={style.nav_li}>probar</li>
                <li onClick={handleLanguage} className={style.nav_li}><GrLanguage className={style.nav_icon}/>{english?'Cambiar idioma':'Change Language'}</li>
                
            </ul>
            
            </div>
        </nav>
    </header>
  )
}
