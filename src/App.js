import React from 'react';
import Main from './components/Main';
import Donate from './components/donate/Donate';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
  <Router>
   <Switch>
          <Route path="/donate">
            <Donate/>
          </Route>
          <Route path="/">
            <Main/>
          </Route>
        </Switch>

  </Router>
  )
}

export default App;
