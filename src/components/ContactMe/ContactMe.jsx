import React from 'react';
import './ContactMe.css'
import TextField from '@mui/material/TextField';
import { validateEmail } from '../../utils/function';



const ContactMe = () => {
  let [error,setError]=React.useState(true)
  
let handleError = (e)=>{
 if(validateEmail(e.target.value) === false)setError(true)
 if(validateEmail(e.target.value)=== true) setError(false)
}
    
    return (
        <form id="form">
  <div className="field">    
    <TextField      
    sx={{width:'70%'}} 
    name='from_name' 
    id="from_name"
    label="Name"   
    variant='standard'
    multiline/>
  </div> 
  <div className="field">        
    <TextField   
    helperText={error===true ? 'Please insert a valid E-mail':''}
    onChange={e=>{handleError(e)}}
    error={error}
    sx={{width:'70%'}}
        name='from_email' 
        id="from_email"
        label="Email"        
        variant='standard'
        multiline/>
  </div> 
  <div className="field">
   
    <TextField   
    sx={{width:'70%'}}
    maxRows={4}
    name='message' 
    id="message"
    label="Message"    
    variant='standard'
    multiline/>
  </div>
 

  <input disabled={error} type="submit" id="button" value="Send Email" />
</form>
    );
};

export default ContactMe;