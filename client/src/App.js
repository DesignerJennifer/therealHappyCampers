import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import SignUpForm from "./pages/SignUpForm";
import CamperRegForm from "./pages/CamperRegForm";
import CreateAccount from "./pages/CreateAccount";




function App() {
  return (
    <Router>
      <div>

        <Route exact path="/" component={Login} />
        <Route exact path="/registration" component={Registration} />
        <Route exact path="/SignUpForm" component={SignUpForm} />
        <Route exact path="/CamperRegForm" component={CamperRegForm} />
        <Route exact path="/CreateAccount" component={CreateAccount} />



      </div>
    </Router>
  );
}

export default App;
