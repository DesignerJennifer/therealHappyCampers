import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Registration from './pages/Registration';
import SignUpForm from './pages/SignUpForm';
import CamperRegForm from './pages/CamperRegForm';
import CreateAccount from './pages/CreateAccount';
import './App.css';
import Dashboard from './pages/dashboard';
import main from './pages/main';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={main} />
        <Route path="/Login" component={Login} />
        <Route path="/registration" component={Registration} />
        <Route path="/SignUpForm" component={SignUpForm} />
        <Route path="/CamperRegForm" component={CamperRegForm} />
        <Route path="/CreateAccount" component={CreateAccount} /> 
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  )
}

export default App;
