import React from 'react';
import { BrowserRouter as Router, Route, Switch, } from 'react-router-dom';
import Login from './pages/Login';
import Registration from './pages/Registration';
import SignUpForm from './pages/SignUpForm';
import CamperRegForm from './pages/CamperRegForm';
import CreateAccount from './pages/CreateAccount';
import './App.css';
import Dashboard from './pages/dashboard';
<<<<<<< HEAD
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignIn from "./pages/Login";
=======
import Main from './pages/main';

>>>>>>> 21ab8c8c5dfe4576c7d72d1bdfa8cb3127eba078

function App() {
  return (
    <Router>
      <Switch>

        <Route exact path="/">
          <Main />
        </Route>

        <Route path="/Login">
          <Login />
        </Route>

<<<<<<< HEAD
// import React from "react";

// import Login from "./pages/Login";
// import Registration from "./pages/Registration";
=======
        <Route path="/registration">
          <Registration />
        </Route>
>>>>>>> 21ab8c8c5dfe4576c7d72d1bdfa8cb3127eba078

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

      </Switch>

    </Router>
  );
}

export default App;
