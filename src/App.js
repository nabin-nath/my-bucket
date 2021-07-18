import React, { useEffect, useState } from "react";
import Movie from "./components/Movie.jsx";
import Loading from "./components/Loading";
import Home from "./components/Home.js";
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Notfound from "./components/Notfound.js";

function App() {

  return (
    <Home />
  );
}

export default App;
