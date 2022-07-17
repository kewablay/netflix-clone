import React, { useEffect } from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { auth } from "./firebase";

function App() {
  // console.log(process.env);
  // console.log(process.env.REACT_APP_API_KEY);
  const user = null;

  useEffect(() => {
    const unsuscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log("logged In ");
      } else {
        console.log("logged out");
      }
    });

    return unsuscribe;
  }, []);

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<LoginScreen />} />
          <Route path="/home" element={<HomeScreen />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
