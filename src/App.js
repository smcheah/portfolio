import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NoMatch from "./pages/NoMatch";
import Home from "./pages/Home";
import './App.css';

function App () {
  return <>
    <Header />
    <main>
      <Router>
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/showcase" >

          </Route>
          <Route exact path="/showcase/:project" >

          </Route>
          <Route>
            <NoMatch />
          </Route>

        </Switch>
      </Router>
    </main>
    <Footer />
  </>;
}

export default App;
