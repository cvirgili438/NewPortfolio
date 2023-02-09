import React from 'react';
import imagen1 from '../../utils/wallpaper.gif'
import Modal from '../Modal/Modal';

import { useSelector } from 'react-redux';
import st from './Project.module.css'
import { hideToView } from '../../utils/function';


const Project = () => {
    const english = useSelector(state=>state.english)
    React.useEffect(()=>{
        hideToView({
            english:english,
            idES:'ProjectES',
            idEN: 'ProjectEN'
        })
    },[english])
  
    return (
    <div
    className={st.container}> 
        <div>
            <h1 id='ProjectEN' >My Projects</h1>
            <h1 id='ProjectES' >Mis Proyectos</h1>
        </div>
        
       
        <div  >
            <h1>Henry Gadget</h1>            
            <img  src={imagen1}   alt='img not found' className={st.gif} />
            <Modal />
            
        </div>
      
    </div>
    );
};

export default Project;
