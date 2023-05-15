import React from 'react';
import Link from 'next/link';
import nameLogo from '../logo/logo';
import Styles from './ComingSoon.module.scss';

const ComingSoonNav = () => (
  <div className={Styles.comingSoonNav}>
    <h1>
      J
      {nameLogo}
      bhunters
    </h1>
    <Link href="/">
      Back to Home Page
    </Link>
  </div>
);

export default ComingSoonNav;
