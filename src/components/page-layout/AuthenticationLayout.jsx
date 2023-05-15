import React from 'react';
import Header from 'components/header/AuthHeader';
/* eslint-disable */
const AuthenticationLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  );
};
/* eslint-enable */
export default AuthenticationLayout;
