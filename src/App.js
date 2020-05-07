import React from 'react';
import ReactDOM from "react-dom";
import {
  Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { createBrowserHistory } from "history";
import Styled from './pages/styled/index'

const customHistory = createBrowserHistory();

export default class extends React.Component {
  render() {
    return (
      <>
        <Router history={customHistory}>
          <Switch>
            <Route exact path="/"
              render={() => <Styled />}>
            </Route>
          </Switch>
        </Router>
      </>
    )
  }
};
