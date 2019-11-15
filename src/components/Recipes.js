import React from 'react';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Recipe from './Recipe';

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  },
  card: {
    width: 350,
    height: 200
  }
})

const Recipes = ({recipes}) => {
  const classes = useStyles();

  return (
    <div style = {{marginTop: `2rem`}} className = {classes.root}>
      <Grid 
        container
        spacing = {2}
      >
        {recipes.map((recipe, index) =>
            <Grid item xs = {12} sm = {4} >
            <Card className = {classes.card} key = {index}>
                <CardMedia
                  component = "img"
                  src = {recipe.recipe.image} 
                  alt = {recipe.recipe.label} 
                  height = {100}
                />
                <CardContent>
                  {recipe.recipe.label}
                </CardContent>
                <CardActions>
                  {/* To launch modal containing recipe*/}
                  <Recipe recipe = {recipe}/>
                  {/*<Button>Recipe</Button> */}
                </CardActions>
            </Card>
            </Grid>)
            
        }
      </Grid>
    </div>
  )
  }

export default Recipes;