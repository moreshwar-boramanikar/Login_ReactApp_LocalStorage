import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import LoginPage from './pages/Login.js';
import NewUser from './pages/NewUser.js';
import ShowUser from './pages/ShowUser.js';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={LoginPage} />
          <Route path="/register" component={NewUser} />
          <Route path="/showUser" component={ShowUser} />
        </div>
      </Router>
    );
  }
}

export default App;