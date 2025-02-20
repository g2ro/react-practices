import React, { useState, useEffect } from 'react';
import Main from './component/Main';
import Gallery from './component/Gallery';
import Guestbook from './component/Guestbook';
import Error404 from './component/Error404';

export default function App() {
  const [route, setRoute] = useState('');

  const hashChangeHandler = () => {
    console.log(window.location.hash);
    setRoute(window.location.hash.substring(1));
  };
  useEffect(() => {
    window.addEventListener('hashchange', hashChangeHandler);

    return () => {
      window.removeEventListener('hashchange', hashChangeHandler);
    }; // unmount 될 때
  }, []);

  return (
    <>
      <ul>
        <li>
          <a href="/#/">main</a>
        </li>

        <li>
          <a href="/#/guestbook">guestbook</a>
        </li>

        <li>
          <a href="/#/gallery">gallery</a>
        </li>
      </ul>
      {(() => {
        switch (route) {
          case '':
          case '/':
            return <Main />;
          case '/guestbook':
            return <Guestbook />;
          case '/gallery':
            return <Gallery />;
          default:
            return <Error404 />;
        }
      })()}
    </>
  );
}
