import React from 'react';
import * as styles from '../assets/scss/component/Error404.scss';
import SiteLayout from '../layout/SiteLayout';

export default function Error404() {
  return (
    <>
      <SiteLayout>
        <div style={{ lineHeight: '200px', textAlign: 'center' }}>
          <h2>Error 404</h2>
        </div>
      </SiteLayout>
    </>
  );
}
