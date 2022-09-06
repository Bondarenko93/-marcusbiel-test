import React, { useContext, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthContext } from './context/AuthContext.js';
import RequireAuth from "./components/RequireAuth.js";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from './pages/login'
import Welcome from './pages/welcome'

function App() {

  const { state, login } = useContext(AuthContext);
  const userData = JSON.parse(localStorage.getItem('userData'))

  useEffect(() => {
    if (userData && !state.isLoggedIn) {
      login()

    }
  }, [state.isLoggedIn])

  return (

    <BrowserRouter>
      <Routes>
        <Route element={<RequireAuth />} >
          <Route index path="/" element={<Welcome user={userData?.name} />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
