import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import NewRegForm from "./pages/NewRegForm"


function App() {
  return (
    <Router>
      <div>

        <Route exact path="/" component={Login} />
        <Route exact path="/registration" component={Registration} />
        <Route exact path="/newregform" component={NewRegForm} />

      </div>
    </Router>
  );
}

export default App;
