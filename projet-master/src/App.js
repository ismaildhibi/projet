import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/layouts/Navbar";
// import Footer from "./components/layouts/Footer";
// React Router Import
import { Switch, Route } from "react-router-dom";
// Import Pages
// import Home from "./components/page/Home";
import News from "./components/page/News";
import Contacts from "./components/page/Contacts";
import Details from "./components/page/Details";
import NotFoundPage from "./components/page/NotFoundPage";
import login from "./components/page/login";
import Signup from "./components/page/Signup";
import Add from "./components/page/Add";
class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          {/* <Route exact path="/" component={Home} /> */}
          <Route path="/news" component={News} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/details" component={Details} />
          <Route path="/login" component={login} />
          <Route path="/Signup" component={Signup} />
          <Route path="/Add" component={Add} />
          <Route component={NotFoundPage} />
        </Switch>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;
