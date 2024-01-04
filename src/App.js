import logo from "./logo.svg";
import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./sass/main.css";
import Head from "./components/Head";
import Home from "./components/Home";
import About from "./components/About";
import Course from "./components/Course";
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Error from "./components/Error";
import Contact from "./components/Contact";
<script
  src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
  crossorigin
></script>;

function App() {
  return (
    <div className="App">
      
      <Head />     
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/course" component={Course} />
        <Route exact path="/contactus" component={Contact} />
        <Route component={Error} />
      </Switch>    
      <Footer />
    </div>
  );
}

export default App;
