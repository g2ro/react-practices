import React from 'react';
import TabItem from './TabItem';
import styled from 'styled-components';

const StyledUL = styled.ul`
  height: 24px;
`;

function Tabs({ tabs }) {
  return (
    <StyledUL>
      {tabs.map((tab) => (
        <TabItem key={tab.no} name={tab.name} active={tab.active} />
      ))}
    </StyledUL>
  );
}

export default Tabs;
