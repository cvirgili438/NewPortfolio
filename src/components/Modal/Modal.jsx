import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import github from '../../utils/gitHub/github-mark.svg'
import { useDispatch, useSelector } from 'react-redux';
import { changeLanguage } from '../../Redux/Action';
import { hideToView } from '../../utils/function';
import './Modal.css'

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function Modal() {
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch()
  const english = useSelector(state=>state.english)
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleLanguage = (e)=>{
    e.preventDefault()
    dispatch(changeLanguage(!english))
  }
  
  React.useEffect(()=>{    
   
    hideToView({
      english:english,
      idES:'modalES',
      idEN:'modalEN'
    })
},[english])
    const font='serif'
    
  return (
    <div>
      <button 
      className='hidden button'id='modalEN'
        onClick={handleClickOpen}>
        See more details
      </button>
      <button 
      className='hidden button' id='modalES'
      onClick={handleClickOpen}>
        Ver mas detalles
      </button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
          Henry Gadget
          {english ? (<Button sx={{fontFamily:font,margin:'auto'}} variant='text' onClick={e=>handleLanguage(e)}>ESP</Button>): (<Button sx={{fontFamily:font,margin:'auto'}} variant='text' onClick={e=>handleLanguage(e)} >ENG</Button>)}
        </BootstrapDialogTitle>
        {!english ? (<DialogContent dividers>            
          <Typography sx={{fontFamily:font}} gutterBottom>
            Henry Gadget fue el proyecto final, que realizamos en grupo, para podernos graduar de Soy Henry
            
          </Typography>
          <Typography sx={{fontFamily:font}} gutterBottom>
          HenryGadget es un E-Commerce donde podras encontrar los mejores articulos tech y celulares al mejor precio y con diferentes opciones de pago como PayPal o tarjeta de credito o debito!
          </Typography>
          <Typography sx={{fontFamily:font}} gutterBottom>
          Este increible proyecto fue hecho con diferentes tecnologias y frameworks, los mas importantes React/Redux/MaterialUI - ExpressJS/NodeJS/Sequelize/MySQL. Estamos muy orgullosos de lo que hicimos y emocionados de poder demostrar que somos capaces de hacer! 
        Personalmente, estuve trabajando en el area de FrontEnd, creé el componente Dashboard del usuario, parte del checkout con la pasarela de pago, ayude en el establecimiento de los estilos de la pagina, y sobre todo, ayude a debugear todos los errores que iban apareciendo en el proceso de creado de la pagina. 
          </Typography>
          <Typography sx={{fontFamily:font}} gutterBottom>
          En el Deploy, tal vez el servidor tarde un poco en estar en línea, porque es un deploy gratuito y cuando la página no tiene ninguna solicitud, el servidor se apaga, esperando una nueva solicitud para volver a estar en línea
          </Typography>
        </DialogContent>):
        (<DialogContent>
            <Typography sx={{fontFamily:font}} gutterBottom>
            Henry Gadget was the final project, which we did as a group, in order to graduate from I'm Henry
            </Typography>
            <Typography sx={{fontFamily:font}} gutterBottom >
            HenryGadget is an E-Commerce where you can find the best phones and tech pieces at the best price with option to pay with Credit / Debit Cards and PayPal!
            </Typography>
            <Typography sx={{fontFamily:font}} gutterBottom >
            This amazing project was made with a few different technologies and frameworks, the most significant as React/Redux/MaterialUI - ExpressJS/NodeJS/Sequelzie/MySQL. We're really proud of what we made and really excited to show what we're able to do!
I personally was working in the front End area, i have created Dashboard User/ Checkout component, help with some style for the page, and above all, i helped to debug all kind of bug who's appear in the processt 
            </Typography>
            <Typography sx={{fontFamily:font}} gutterBottom >
            maybe it takes a while for the server to be online, because it's a "free deploy page" and when the page doesn't have any request, the server shuts down, waiting for a new request, to come back online
            </Typography>
        </DialogContent>)
        }
        
        <DialogActions>
            <button 
             target="_blank"
            href='https://github.com/cvirgili438/PF-HenryGadget' 
            autoFocus 
            
            >
                <Typography sx={{fontFamily:font,}} gutterBottom>
                    {english? 'Github Project':'Github del proyecto'}
                </Typography>
                <img src={github} width='40px' height={'40px'} alt={'GitHub'}/>
            </button>
            
               
            
           
          <a href='https://pf-henrygadget-hbbo.onrender.com/'  rel="noreferrer"  target="_blank"><button   autoFocus >
            <Typography sx={{fontFamily:font,}} gutterBottom >Deploy</Typography>
          </button>
          </a>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}