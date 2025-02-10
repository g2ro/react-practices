import React from 'react';

function Clock03({hour, min, sec}) {
    // 파라미터로 넘어 올는 data를 바꾸는 것은 좋지 않다. ex) hour가 배열일때 hour.push를 하게 되면 외부에 있는 hour도 변경하게 된다 이런 경우를 막아야한다.
    // 부모에서 변수를 상태에 저장할때 문제가 생길 가능성이 존재하는데 이는 나중에 공부하게 된다.
    // 순수 함수 용어의 경우 파라미터를 변경하게 되면 error가 발생하는데 js는  순수 함수 용어가 아니지만 파라미터를 조작하는 것을 추천하지 않는다.
    
    return (
        <div>
            {/* {hour > 10 ? hour : '0' + hour} */}
            {('0' + hour).slice(-2)}
            {':'}
            {('0' + min).slice(-2)}
            {':'}
            {('0' + sec).slice(-2)}
        </div>
        // React.createElement('div', null, '00', ':', '00', ':', '00');
    );
}

export default Clock03;