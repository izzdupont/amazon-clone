import React, { useInsertionEffect } from "react"
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from './Login';
import { auth, user } from "./firebase";
import { StateProvider, useStateValue } from "./StateProvider";


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
