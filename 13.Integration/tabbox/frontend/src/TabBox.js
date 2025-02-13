import React from 'react';
import Tabs from './Tabs';
import TabView from './TabView';
import { Tab_Box } from './assets/scss/TabBox.scss';
import data from './assets/json/data';

function TabBox(props) {
  return (
    <div className={Tab_Box}>
      <Tabs tabs={data} />
      <TabView />
    </div>
  );
}

export default TabBox;
