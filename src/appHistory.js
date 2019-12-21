import createHistory from 'history/createBrowserHistory';

const history = createHistory();

const location = history.location;

const unlisten = history.listen((location, action) => {
  console.log(`You changed the name to ${location.pathname}`)
})

export default history;