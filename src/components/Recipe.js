import React, {useState} from 'react';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: 400
  }
}));

let rand = () => {
  return Math.round(Math.random() * 20) - 10;
}

// let getModalStyle = () => {
//   const top = 50 + rand();
//   const left = 50 + rand();

//   return {
//     top: `${top}%`,
//     left: `${left}%`,
//     transform: `translate(-${top}%, -${left}%)`
//   }
// }
const Recipe = ({recipe}) => {
  const classes = useStyles();

  
  //Modal open state
  const [open, setOpen] = useState(false);
  //Modal style (static hook; always uses getModalStyle)
  // const [modalStyle] = useState(getModalStyle);

  //Function to open modal
  const handleOpen = () => {
    setOpen(true);
  }
  
  //Function to close modal
  const handleClose = () => {
    setOpen(false);
  }

  return(
    <div>
      <Button onClick = {handleOpen}>Recipe</Button>
      <Modal open = {open} onClose = {handleClose} className = {classes.modal} >
        <div className = {classes.paper}>
          <h2>{recipe.recipe.label}</h2>
          <Button onClick = {handleClose}>Close</Button>
        </div>
      </Modal>
    </div>
  )
}

export default Recipe;