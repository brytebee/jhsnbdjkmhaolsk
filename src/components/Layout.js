import Footer from './footer/Footer';
import Navbar from './navbar/NavbarMain';

// eslint-disable-next-line react/prop-types
function Layout({ children }) {
  return (
    <>
      <Navbar
        props1="Home page"
        props2="Tools"
        props3="Our Services"
        props4="Reviews"
      />
      {children}
      <Footer bgColor="#E9F2F8" textColor="#00235b" />
    </>
  );
}

export default Layout;
