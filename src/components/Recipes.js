import React from 'react';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Recipe from './Recipe';

const useStyles = makeStyles({
  card: {
    width: 350,
    height: 200
  }
})

const Recipes = ({recipes}) => {
  const classes = useStyles();

  return (
    <div style = {{padding: `2rem`}}>
      <Grid 
        container
      >
        {recipes.map((recipe, index) =>
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
                </CardActions>
            </Card>
          )
        }
      </Grid>
    </div>
  )
  }

export default Recipes;