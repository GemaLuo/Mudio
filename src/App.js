import React from "react";
import { Routes, Route } from "react-router-dom";
import Account from "./components/Account.jsx";
import ProtectedRoute from "./components/ProtectedRoute.js";
import Signin from "./components/Signin";
import Signup from "./components/Signup.jsx";
import { AuthContextProvider } from "./context/AuthContext.js";
import HomePage from "./components/pages/HomePage.js";
import Home from "./components/MainContent/Home.js";
import Search from "./components/MainContent/Search.js";
import Album from "./components/MainContent/Album.js";
import Artist from "./components/MainContent/Artist.js";
import Create from "./components/MainContent/Create.js";
import Viuxtemps from './components/MainContent/Album/Viuxtemps';
import Korngold from './components/MainContent/Album/Korngold';
import Piatigorsky from './components/MainContent/Album/Piatigorsky';

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
            <Route path="search" element={<Search />} />
            <Route path="album" element={<Album />} />
            <Route path="artist=heifetz" element={<Artist />} />
            <Route path="create-playlist" element={<Create />} />
            <Route path="album-viuxtemps" element={<Viuxtemps />} />
            <Route path="album-Korngold" element={<Korngold />} />
            <Route path="album-Piatigorsky" element={<Piatigorsky />} />
          </Route>
          
        </Routes>
      </AuthContextProvider>
    </div>
  );
};

export default App;
