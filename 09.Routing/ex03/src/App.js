import React from 'react';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import Main from './component/Main';
import Guestbook from './component/Guestbook';
import Gallery from './component/Gallery';
import Error404 from './component/Error404';

export default function App() {
  return (
    // <HashRouter>
    //   <Routes>
    //     <Route path={'/'} element={<Main />} />
    //     <Route path={'/guestbook'} element={<Guestbook />} />{' '}
    //     {/* http://localhost:9090/#/guestbook */}
    //     <Route path={'/gallery'} element={<Gallery />} />{' '}
    //     {/* http://localhost:9090/#/gallery */}
    //     <Route path={'*'} element={<Error404 />} />
    //   </Routes>
    // </HashRouter>

    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Main />} />
        <Route path={'/guestbook'} element={<Guestbook />} />
        <Route path={'/gallery'} element={<Gallery />} />
        <Route path={'*'} element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}
