/* eslint-disable default-case */
import "./App.css"
import React from "react";
import Navbar from './Navbar'
import Intro from './pages/Intro'
import Tech from './pages/Tech'
import Projects from './pages/Projects'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'


export default function App() {
  return (
    <>
    <Navbar />
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Intro" element={<Intro />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Tech" element={<Tech/>} />
      </Routes>
     
    </div>
    </>

  );
}

