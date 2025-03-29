import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Player from "./components/player";
import Movies from "./pages/Movies";
import Tv from "./pages/Tv";
import MyList from "./pages/MyList";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/player" element={<Player />} />
        <Route exact path="/movies" element={<Movies />} />
        <Route exact path="/mylist" element={<MyList />} />
        <Route exact path="/tv" element={<Tv />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
