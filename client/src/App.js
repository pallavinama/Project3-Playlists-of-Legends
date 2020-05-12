import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Champions from "./containers/Champions";
import Search from "./containers/Search";

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/" component={Champions} />
      <Route exact path="/champions" component={Champions} />
      <Route exact path="/champions/:id" component={Search} />
    </Router>
  );
}

export default App;
