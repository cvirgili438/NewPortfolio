import React from 'react';
import './ContactMe.css'
import TextField from '@mui/material/TextField';

const ContactMe = () => {

    
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
 

  <input type="submit" id="button" value="Send Email" />
</form>
    );
};

export default ContactMe;