import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './login/login';

import './index.scss';
import './style/base.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <Route path="/" component={Login} exact={true}/>
    <Route path="/login" component={Login}/>
  </Router>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
