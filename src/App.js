import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoginForm from './Components/pages/LoginForm'
import Navbar from './Components/common/Navbar'
import Home from './Components/pages/Home';
import Customer from './Components/pages/Customer';

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/login' component={LoginForm} />
          <Route exact path='/customer' component={Customer} />
        </Switch>
      </Router>
    )
  }
}
export default App
