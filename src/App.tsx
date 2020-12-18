import './App.css';
import { ItemList, ItemDetails } from './pages/marketplace';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import itemReducer from './pages/marketplace/store/item.reducers';
import SearchAppBar from './shared/components/Navbar';
import { createMuiTheme } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

const reducers = combineReducers({ marketPlace: itemReducer });
const store = createStore(reducers, applyMiddleware(thunk));

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#ff5000',
    },
    secondary: {
      main: '#651fff',
    },
  },
});

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <SearchAppBar />
          <Switch>
            <Route path="/:name">
              {({ match }: any) => {
                const { params } = match;
                return <ItemDetails name={params.name} />;
              }}
            </Route>
            <Route path="/">{() => <ItemList />}</Route>
            <Redirect to="/" />
          </Switch>
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
