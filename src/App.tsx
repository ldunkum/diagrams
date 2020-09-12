import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Interaktiv from "routes/Interaktiv/Interaktiv"
import Statisch from "routes/Statisch/Statisch"
import Header from 'components/Header/Header';

export default function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/">
          <Statisch />
        </Route>
        <Route path="/interaktiv">
          <Interaktiv />
        </Route>
      </Switch>
    </Router>
  );
}
