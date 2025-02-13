import React from 'react';
import Header from './header';
import Contents from './Contents';
import { useRef } from 'react';

// React.createElement('div', null, Header, React.createElement(...), ...);
// 여기서 Header가 호출된다면 => html 엘리먼트가 아닌 것을 파악하고 -> react에서 자동으로 호출한다.
// component react api 생성
function App() {
  /*
    return (
        <div id="App">
            <Header />
            <Contents/>
        </div>
    );
    */
  // return React.createElement('div', {id: 'App'}
  //     , React.createElement(Header, null), React.createElement(Contents, null))

  const refDiv = useRef(null);
  return (
    <>
      <div id="App" ref={refDiv}>
        {'Test1'}
      </div>
    </>
  );
  //   return React.createElement('div', { id: 'App' }, 'Test');
}

export { App };
