import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home'
import SortingPage from './components/SortingPage'


const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/sort" element={<SortingPage/>}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
