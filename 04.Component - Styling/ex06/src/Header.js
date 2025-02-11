import React from 'react';
import * as styles from './assets/scss/Header.scss';

function Header(props) {
  // 객체를 보낸다고 destructing을 할 수 없다.
  // export를 보낼때 destructing을 할 수 있다.
  // equal(=)이 아님
  return <h1 className={styles.Header}>SASS & SCSS</h1>;
}

export default Header;
