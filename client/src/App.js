import React from 'react';
import './App.css';
import Dashboard from './pages/dashboard';
import { BrowserRouter as Router, Route } from "react-router-dom";
import SignIn from "./pages/Login";

function App() {
  return (

  <Router>
    <Route exact path="/dashboard" component={Dashboard} />
    <Route path="/login" component={SignIn} />
  </Router>
  )


}
  
// import React from "react";

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

export default App
