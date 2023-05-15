import React from 'react';
import NonAuthHeader from '../header/NonAuthHeader';
import Footer from '../footer/Footer';
/* eslint-disable */
const NonAuthenticationLayout = ({ children }) => {
  return (
    <>
      <NonAuthHeader />
      <main className="main-block">{children}</main>
      <Footer />
    </>
  );
};
/* eslint-enable */
export default NonAuthenticationLayout;
