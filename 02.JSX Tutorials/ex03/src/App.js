import React from 'react';
import Header from './header';
import Contents from './Contents';

// React.createElement('div', null, Header, React.createElement(...), ...);
// 여기서 Header가 호출된다면 => html 엘리먼트가 아닌 것을 파악하고 -> react에서 자동으로 호출한다.

function App() {
    return (
        <div>
            <Header />
            <Contents/>
        </div>
    );
}

export {App};