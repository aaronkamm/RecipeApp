import createHistory from 'history/createBrowserHistory';
import { fetchRecipes } from './actions/recipeActions';

const history = createHistory();

const location = history.location;

const unlisten = history.listen((location, action) => {
  fetchRecipes('salad');
});

export default history;
