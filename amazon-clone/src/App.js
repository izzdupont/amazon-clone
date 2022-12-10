import React, { useInsertionEffect } from "react"
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Payment from './Payment';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './Login';
import { auth, user } from "./firebase";
import { StateProvider, useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51MDZkKJR05dEF3NDXKXEKn7WeH4dUftDDS7mw4ir3KvG2uFdUrK7PZncQLFEhKCxsBJCl4z9N3JA8yOCSowC8goU002ERYGhG0"
);

function App() {
  const [{}, dispatchEvent] = useStateValue();

  useInsertionEffect(() =>
  {
    // run only once when the app componenet loads
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>> ', authUser);

      if (authUser) {
        // the correct user is logged in
        dispatchEvent({
          type: "SET_USER",
          user: authUser,
        })
      }  else {
        // the user is logged out
        dispatchEvent({
          type: "SET_USER",
          user: null,
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className="App">
        <Switch>
        <Route path='/login'>
          <Login />
          </Route>
          <Route path='/checkout'>
            <Header />
            <Checkout />
          </Route>
          <Route path='/payment'>
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path='/'>
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
