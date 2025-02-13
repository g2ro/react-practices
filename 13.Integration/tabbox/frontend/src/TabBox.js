import React, { useState } from 'react';
import Tabs from './Tabs';
import TabView from './TabView';
import { Tab_Box } from './assets/scss/TabBox.scss';
import data from './assets/json/data';

function TabBox(props) {
  const [activeIndex, setActiveIndex] = useState(0);

  const selectTab = (no) => {
    console.log(`${no} selected`);
    setActiveIndex(data.findIndex((e) => e.no === no));
  };

  return (
    <div className={Tab_Box}>
      <Tabs
        tabs={data.map((e, index) => {
          // const n = Object.assign({}, e);
          // const n = {
          //   no : e.no,
          //   name: e.name,
          //   etc,,,
          // } => assign의 기능 -> 새로운 객체이지만, 내부 요소는 그대로
          // const {...rest } = e; // Object.assign과 같은 기능
          const { contents, ...rest } = e; // contents와 rest로 e 객체를 분할 한다.
          if (index === activeIndex) {
            rest.active = true;
          }
          return rest;
        })}
        selectTab={selectTab}
      />
      <TabView contents={data[activeIndex].contents} />
    </div>
  );
}

export default TabBox;
