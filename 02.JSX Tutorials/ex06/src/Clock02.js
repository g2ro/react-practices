import React from 'react';

function Clock02(props) {
    const now = new Date();
    
    return (
        <div>
            {/* {hour > 10 ? hour : '0' + hour} */}
            {('0' + now.getHours()).slice(-2)}
            {':'}
            {('0' + now.getMinutes()).slice(-2)}
            {':'}
            {('0' + now.getSeconds()).slice(-2)}
        </div>
        // React.createElement('div', null, '00', ':', '00', ':', '00');
    );
}

export default Clock02;