import React from 'react';
import TabItem from './TabItem';
function Tabs({data}) {
    return (
        <ul>
            {data.map((tab) => <TabItem key={tab.no} name={tab.name} active={tab.active}/>)}
        </ul>
    );
}

export default Tabs;