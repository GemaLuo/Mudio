import React from "react";
import { Routes, Route } from "react-router-dom";
import Account from "./components/Account.jsx";
import ProtectedRoute from "./components/ProtectedRoute.js";
import Signin from "./components/Signin";
import Signup from "./components/Signup.jsx";
import { AuthContextProvider } from "./context/AuthContext.js";
import HomePage from "./components/pages/HomePage.js";
import Home from "./components/MainContent/Home.js";

const App = () => {
  return (
    <div>
      {/* <h1 className="text-center text-3xl font-bold mt-5">nav bar</h1> */}
      <AuthContextProvider>
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            }
          />
          <Route path="/" element={<ProtectedRoute><HomePage /></ProtectedRoute>}>
            <Route index element={<Home />} />
          </Route>
          
        </Routes>
      </AuthContextProvider>
    </div>
  );
};

export default App;
