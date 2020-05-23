import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
// import Registration from './pages/Registration';
import SignUp from './pages/Signup';
// import CamperRegForm from './pages/CamperRegForm';

import './App.css';
import Dashboard from './pages/dashboard';
import Main from './pages/main';
import { GlobalStateProvider } from '../src/Utils/GlobalState';

function App() {
  return (
    <GlobalStateProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            <Main />
          </Route>

          <Route path="/Login">
            <Login />
          </Route>

          <Route path="/signup">
            <SignUp />
          </Route>

          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </GlobalStateProvider>
  );
}

export default App;
