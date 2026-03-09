
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Spotlight from './components/Spotlight';
import Home from './components/Home';
import Screenwriting from './components/Screenwriting';
import Discript from './components/Discript';
import Fiction from './components/Fiction';
import Criticism from './components/Criticism';

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Spotlight />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/guiones" element={<Screenwriting />} />
        <Route path="/discript" element={<Discript />} />
        <Route path="/ficcion" element={<Fiction />} />
        <Route path="/critica" element={<Criticism />} />
      </Routes>
    </Router>
  );
};

export default App;
