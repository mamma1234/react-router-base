import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
import App from './components/App.js';
import Index from './components/Index.js';
import About from './components/About.js';
import NoMatch from './components/NoMatch.js';

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Index} />
      <Route path="about" component={About}/>
      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>
), document.getElementById('root'))