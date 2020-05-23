import React from 'react';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import Login from './pages/Login';
import SignUpForm from './pages/SignUpForm';
import CamperRegForm from './pages/CamperRegForm.js';
import CreateAccount from './pages/CreateAccount';
import './App.css';
import Dashboard from './pages/dashboard';
import Main from './pages/main';
import { GlobalStateProvider } from "./Utils/GlobalState";


function App() {
  return (
    <Router>
      <Switch>
        <GlobalStateProvider>

          <Route exact path="/">
            <Main />
          </Route>

          <Route path="/Login">
            <Login />
          </Route>

          <Route path="/SignUpForm">
            <SignUpForm />
          </Route>

          <Route path="/CamperRegForm">
            <CamperRegForm />
          </Route>

          <Route path="/CreateAccount">
            <CreateAccount />
          </Route>

          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </GlobalStateProvider>

      </Switch>

    </Router>
  );
}

export default App;
