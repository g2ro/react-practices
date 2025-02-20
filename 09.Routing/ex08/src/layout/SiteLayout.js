import React from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';
import { Outlet } from 'react-router';
import * as styles from '../assets/scss/layout/Content.scss';

function SiteLayout() {
  return (
    <>
      <Header />
      <div className={styles.Content}>
        <Outlet />
      </div>

      <Navigation />
      <Footer />
    </>
  );
}

export default SiteLayout;
