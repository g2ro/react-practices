import React from 'react';
import { Tab_View } from './assets/scss/TabView.scss';

function TabView({ contents }) {
  return <div className={Tab_View}>
    <span>{'hello world!!'}</span>
    <span>{contents}</span>
    </div>;
}

export default TabView;
