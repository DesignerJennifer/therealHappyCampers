import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import AddressForm from "./pages/AddressForm";
import PaymentForm from "./pages/PaymentForm";
import CheckoutForm from "./pages/CheckoutForm";




function App() {
  return (
    <Router>
      <div>

        <Route exact path="/" component={Login} />
        <Route exact path="/registration" component={Registration} />
        <Route exact path="/AddressForm" component={AddressForm} />
        <Route exact path="/PaymentForm" component={PaymentForm} />
        <Route exact path="/CheckoutForm" component={CheckoutForm} />



      </div>
    </Router>
  );
}

export default App;
