import "./App.css";

import NavbarComponent from "./components/UI/NavbarComponent";
import LoggedNavbar from "./components/UI/LoggedNavbar";
import Home from "./components/Pagecomponents/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
function App() {
  return (
    <Router>
      <NavbarComponent />
      <Home />
    </Router>
  );
}

export default App;
