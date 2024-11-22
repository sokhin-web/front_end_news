/* eslint-disable react/prop-types */
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

function Master_Web({ moon, nav_bg }) {
  return (
    <div>
      <Logo />
      <Navbar moon={moon} nav_bg={nav_bg} />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Master_Web;
