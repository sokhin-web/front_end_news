import Footer from "../components/Footer";
import Logo from "../components/Logo";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

function Master_Web() {
  return (
    <div>
      <Logo />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Master_Web;
