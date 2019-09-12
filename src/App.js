import React from "react";
import Menu from "./Components/Menu";
import Header from "./Components/Header";
import RouterURL from "./Components/Router";
import './App.css';

import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Menu></Menu>
      <Header></Header>
      <RouterURL></RouterURL>
    </Router>
  );
}

export default App;
