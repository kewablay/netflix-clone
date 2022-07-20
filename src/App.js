import React, { useEffect } from "react";
import "./App.css";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import {
  login,
  logout,
  selectFromRegister,
  selectUser,
} from "./features/userSlice";
import ProfileScreen from "./screens/ProfileScreen";

function App() {
  // console.log(process.env);
  // console.log(process.env.REACT_APP_API_KEY);
  const user = useSelector(selectUser);
  const fromRegisterRoute = useSelector(selectFromRegister);
  const dispatch = useDispatch();
  console.log("fromregister:", fromRegisterRoute);

  useEffect(() => {
    const unsuscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser && !fromRegisterRoute) {
        dispatch(
          login({
            uid: authUser.uid,
            email: authUser.email,
          })
        );
      } else {
        dispatch(logout());
        console.log("logged out");
        console.log(user);
      }
    });

    return unsuscribe;
  }, [dispatch, fromRegisterRoute]);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
