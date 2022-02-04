import * as React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/HomeComponent';
import About from './components/AboutComponent';
import Footer from './components/FooterComponent';
import './App.css';
import MainTable from './components/MainTableComponent';

function App() {
  return (
    <div>
      <Nav />
      <div class="main-div">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/test" element={<MainTable />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
