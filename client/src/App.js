import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './pages/Login';
import Registration from './pages/Registration';
import SignUpForm from './pages/SignUpForm';
import CamperRegForm from './pages/CamperRegForm';
import CreateAccount from './pages/CreateAccount';
import './App.css';
import Dashboard from './pages/dashboard';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Login} />
        <Route exact path="/registration" component={Registration} />
        <Route exact path="/SignUpForm" component={SignUpForm} />
        <Route exact path="/CamperRegForm" component={CamperRegForm} />
        <Route exact path="/CreateAccount" component={CreateAccount} />
        <Route exact path="/dashboard" component={Dashboard} />
      </div>
    </Router>
  );
}

// import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import Login from "./pages/Login";
// import Registration from "./pages/Registration";

// function App() {
//   return (
//     <Router>
//       <div>

//         <Route exact path="/" component={Login} />
//         <Route exact path="/registration" component={Registration} />

//       </div>
//     </Router>
//   );
// }

export default App;
