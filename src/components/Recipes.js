import React from 'react';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Recipe from './Recipe';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  },
  card: {
    maxWidth: 345,
    maxHeight: 400
  },
  media: {
    height: 0,
    // height: 100
    paddingTop: '56.25%'
  }
})

const Recipes = ({recipes}) => {
  const classes = useStyles();
  return (
    <div style = {{margin: `2rem 2rem 0 2rem`}} className = {classes.root}>
      <Grid 
        container
        spacing = {2}
      >
        {recipes.map((recipe, index) =>
            <Grid key = {index} item xs = {12} sm = {6} md = {4} >
              <Card className = {classes.card} key = {index}>
                  <CardMedia
                    image = {recipe.recipe.image} 
                    alt = {recipe.recipe.label} 
                    className = {classes.media}
                  />
                  <CardContent>
                    <Typography variant = "h6" component = "h2">{recipe.recipe.label}</Typography>
                  </CardContent>
                  <CardActions>
                    {/* To launch modal containing recipe/ingredients*/}
                    <Recipe recipe = {recipe}/>
                  </CardActions>
              </Card>
            </Grid>)
            
        }
      </Grid>
    </div>
  )
  }

export default Recipes;