import React from 'react';

function Clock01(props) {
    const now = new Date();

    var hour = now.getHours();
    var min = now.getMinutes();
    var sec = now.getSeconds();

    if(hour < 10){
        hour = '0' + hour;
    }

    if(min < 10){
        min = '0' + min;
    }

    if(sec < 10){
        sec = '0' + sec;
    }

    return (
        <div>
            {hour}
            {':'}
            {min}
            {':'}
            {sec}
        </div>
        // React.createElement('div', null, '00', ':', '00', ':', '00');
    );
}

export default Clock01;