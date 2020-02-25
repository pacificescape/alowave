import React from 'react';
import Main from './components/Main';
import Donate from './components/donate/Donate';
import Bell from './components/bell/Bell';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { ThemeProvider } from '@material-ui/styles';
import theme from './Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/donate">
            <Donate />
          </Route>
          <Route path="/bell">
            <Bell />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

export default App;
