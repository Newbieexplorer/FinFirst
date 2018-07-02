import React from 'react';
import ReactDOM from 'react-dom';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { Router, Route } from 'react-router'
import { createBrowserHistory } from 'history'
import './css/index.css';
import {Provider} from 'react-redux';
import Store from './service/Store';
import Login from './component/Login'
import Portfolio from './component/Portfolio'

const history = createBrowserHistory()

ReactDOM.render(
  <Provider store={Store}>
  <Router history={history}>
    <Route exact={true} path='/' component={Portfolio}>
      <Route path='/login' component={Login} />
      <Route path='/portfolio' component={Portfolio} />
    </Route>
  </Router>
  </Provider>
  , document.getElementById('root'));
