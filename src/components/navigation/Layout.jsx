import { Outlet } from "react-router";
import Nav from "./Nav";
import ScrollToTop from "./ScrollToTop";

const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <Nav />
      <Outlet />
    </>
  );
};

export default Layout;
