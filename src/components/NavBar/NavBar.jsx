import React from 'react'
import style from './NavBar.module.css'
import { BsMenuUp } from "react-icons/bs";
export default function NavBar() {
    const [active,setActive] = React.useState(false)
    const handleShow = ()=>{
        setActive(!active)
    }

  return (
    <header className={style.nav}>
        <nav className={style.nav_container}>
            
            <BsMenuUp onClick={handleShow} className={style.nav_close}/>
            <div className={`${style.nav_menu} ${active ? style.show_menu : ''}`} id='nav_menu' >
            <ul className={style.nav_ul}>
                <li className={style.nav_li} >algo</li>
                <li className={style.nav_li}>para</li>
                <li className={style.nav_li}>probar</li>
                
            </ul>
            </div>
        </nav>
    </header>
  )
}
