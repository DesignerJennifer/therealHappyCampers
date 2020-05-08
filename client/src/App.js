import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./pages/Login";
import Registration from "./pages/Registration";


function App() {
  return (
    <Router>
      <div>

        <Route exact path="/" component={Login} />
        <Route exact path="/registration" component={Registration} />

      </div>
    </Router>
  );
}

export default App;
