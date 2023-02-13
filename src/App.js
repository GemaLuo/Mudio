import React from "react";
import { Routes, Route } from "react-router-dom";
import Account from "./components/Account.jsx";
import ProtectedRoute from "./components/ProtectedRoute.js";
import Signin from "./components/Signin";
import Signup from "./components/Signup.jsx";
import { AuthContextProvider } from "./context/AuthContext.js";
import Home from "./components/pages/Home.js";

const App = () => {
  return (
    <div>
      {/* <h1 className="text-center text-3xl font-bold mt-5">nav bar</h1> */}
      <AuthContextProvider>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          
        </Routes>
      </AuthContextProvider>
    </div>
  );
};

export default App;
