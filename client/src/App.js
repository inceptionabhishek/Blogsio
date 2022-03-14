import "./App.css";

import NavbarComponent from "./components/UI/NavbarComponent";
import LoggedNavbar from "./components/UI/LoggedNavbar";
import Home from "./components/Pagecomponents/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Topcover from "./components/Pagecomponents/Topcover";
import Base from "./pages/Base";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Totalusers from "./pages/Totalusers";
import Followers from "./components/Pagecomponents/Followers";
import Folllowing from "./components/Pagecomponents/Following";
import Footer from "./components/UI/Footer";
function App() {
  return (
    <Router>
      <LoggedNavbar />
      <Routes>
        <Route path="/" element={<Base />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/totalusers" element={<Totalusers />} />
        <Route path="/followers" element={<Followers />} />
        <Route path="/following" element={<Folllowing />} />
      </Routes>
    </Router>
  );
}

export default App;
