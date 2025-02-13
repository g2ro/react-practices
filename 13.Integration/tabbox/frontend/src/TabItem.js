import React, { useState } from 'react';
import { Tab_Item } from './assets/scss/TabItem.scss';

function TabItem({ name, active }) {
  const [select, setSelect] = useState(active);

  return (
    <li
      className={[Tab_Item, select ? 'active' : ''].join(' ')}
      onClick={() => {
        setSelect(!select);
      }}
    >
      {name}
    </li>
  );
}

export default TabItem;
