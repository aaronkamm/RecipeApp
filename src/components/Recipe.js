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
    width: `50%`
  }
}));

const Recipe = ({recipe}) => {
  const classes = useStyles();

  //Modal open state
  const [open, setOpen] = useState(false);

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
      <Button onClick = {handleOpen}>Ingredients</Button>
      <Modal open = {open} onClose = {handleClose} className = {classes.modal} >
        <div className = {classes.paper}>
          <h2>{recipe.recipe.label}</h2>
          <ul>
            {(recipe.recipe.ingredients).map((ingredient, index) => 
              <li key = {index}>{ingredient.text}</li>
            )}
          </ul>
          
          <Button onClick = {handleClose}>Close</Button>
        </div>
      </Modal>
    </div>
  )
}

export default Recipe;