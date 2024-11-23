/* eslint-disable react/prop-types */
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
function Navbar({ moon, nav_bg }) {
  return (
    <div className="sticky top-0 z-50 w-full animate-slide_top_center">
      <div
        className={`flex flex-row justify-center items-center gap-10 ${nav_bg}   shadow-lg  p-2  text-white text-lg phone:text-sm phone:gap-3 phone:p-1 phone:py-2`}
      >
        <Link
          to="front_end_news/"
          className="hover:opacity-70 text-2xl phone:text-xl"
        >
          <FaHome />
        </Link>
        <Link to="front_end_news/entertainment/" className="hover:underline">
          Entertainment
        </Link>
        <Link to="front_end_news/technology/" className="hover:underline">
          Technology
        </Link>
        <Link to="front_end_news/society/" className="hover:underline">
          Society
        </Link>
        <Link to="front_end_news/sport/" className="hover:underline">
          Sports
        </Link>
        <div className=" text-xl cursor-pointer items-center mt-1 ">{moon}</div>
      </div>
    </div>
  );
}

export default Navbar;
