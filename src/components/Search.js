import React, { useEffect, useState } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchRecipes, setQuery } from '../actions/recipeActions';
import InputBase from '@material-ui/core/InputBase';
import { push } from 'connected-react-router';

const useStyles = makeStyles(theme => ({
  search: {
    position: 'relative',
    backgroundColor: fade(theme.palette.common.white, 0.12),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.22)
    },
    borderRadius: theme.shape.borderRadius,
    [theme.breakpoints.up('xs')]: {
      marginLeft: theme.spacing(3),
      width: 'auto'
    }
  },

  searchIcon: {
    width: theme.spacing(3),
    marginLeft: theme.spacing(1),
    position: 'absolute',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },

  inputBox: {
    padding: theme.spacing(1, 1, 1, 6)
  }
}));

const Search = ({ query, fetchRecipes, setQuery, push }) => {
  //Search state
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchRecipes(query);
  }, [query]);

  //Update local search state
  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search.length);
    console.log(search);
  };

  //To handle search submission for search
  const handleSearch = e => {
    e.preventDefault();
    push(`/${search}`);
    setQuery(search);
    setSearch('');
  };

  const classes = useStyles();

  return (
    <div className={classes.search}>
      <form onSubmit={handleSearch}>
        <div>
          <SearchIcon className={classes.searchIcon} />
        </div>
        <InputBase
          onChange={updateSearch}
          value={search}
          placeholder="Recipe search"
          style={{ color: 'inherit' }}
          className={classes.inputBox}
        />
        {/*<Button type = 'submit' variant = "contained" color = "secondary" disabled = {!search ? true : false}>Search -- I'm hungry!</Button>*/}
      </form>
    </div>
  );
};

const mapStateToProps = state => ({
  query: state.results.query
});

// export default withRouter(Search);
// export default withRouter(connect(mapStateToProps, {fetchRecipes, setQuery})(Search));
export default connect(mapStateToProps, { fetchRecipes, setQuery, push })(
  Search
);
