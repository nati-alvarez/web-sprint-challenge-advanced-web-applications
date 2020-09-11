import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./styles.scss";

import Login from "./components/Login";
import ProtectedRoute from "./ProtectedRoute";
import BubblePage from "./components/BubblePage";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  return (
    <Router>
      <div className="App">
        <Route exact path="/">
          <Login token={token} setToken={setToken}/>
        </Route>
        <ProtectedRoute path="/bubble-page" component={BubblePage}/>
        {/* 
          Build a PrivateRoute component that will 
          display BubblePage when you're authenticated 
        */}
      </div>
    </Router>
  );
}

export default App;
