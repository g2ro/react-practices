import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from 'react-router';
import Main from './component/Main';
import Gallery from './component/Gallery';
import Guestbook from './component/Guestbook';
import Error404 from './component/Error404';
import Error500 from './component/Error500';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/guestbook" element={<Guestbook />} />
        <Route path="/error/500" element={<Error500 />} />
      </Routes>
    </Router>
  );
}
