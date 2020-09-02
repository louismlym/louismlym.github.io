import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <div id="lm-portfolio">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
