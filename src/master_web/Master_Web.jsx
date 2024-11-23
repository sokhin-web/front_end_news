/* eslint-disable react/prop-types */
import Footer from "../components/Footer";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

function Master_Web({ moon, nav_bg, text_color, hover_text_color }) {
  return (
    <div>
      <Logo text_color={text_color} />
      <Navbar moon={moon} nav_bg={nav_bg} />
      <Outlet />
      <Footer text_color={text_color} hover_text_color={hover_text_color} />
    </div>
  );
}

export default Master_Web;
