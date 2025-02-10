import React from 'react';

function TabItem({key, name, active}) {
    return (
        <li className={active ? "active" : ""}>{name}</li>
    );
}

export default TabItem;