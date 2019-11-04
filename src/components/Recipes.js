import React from 'react';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
// import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';

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
                  component = 'img'
                  src = {recipe.recipe.image} 
                  alt = {recipe.recipe.label} 
                  height = {100}
                />
                <CardContent>
                  {recipe.recipe.label}
                </CardContent>
            </Card>
          
        
          )
        }
      </Grid>
    </div>
  )
  }

export default Recipes;