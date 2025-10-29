import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Specialties from './components/Specialties';
import Events from './components/Events';
import Videos from './components/Videos';
import Articles from './components/Articles';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-900 antialiased">
        <Header />
        <Routes>
          <Route path="/" element={
            <main>
              <Hero />
              <About />
              <Specialties />
              <Events />
              <Videos />
              <Articles />
              <Gallery />
              <Testimonials />
            </main>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
