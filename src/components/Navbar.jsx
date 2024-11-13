import { FaHome } from "react-icons/fa";
function Navbar() {
  return (
    <div className="animate-slide_top_center">
      <div className=" flex flex-row justify-center items-center gap-10  bg-red-600 shadow-lg  p-2  text-white text-lg phone:text-sm phone:gap-5 phone:p-1 phone:py-2 ">
        <a
          href="/front_end_news/"
          className="hover:opacity-70 text-2xl phone:text-xl"
        >
          <FaHome />
        </a>
        <a href="/front_end_news//entertainment/" className="hover:underline">
          Entertainment
        </a>
        <a href="/front_end_news//technology/" className="hover:underline">
          Technology
        </a>
        <a href="/front_end_news//society/" className="hover:underline">
          Society
        </a>
        <a href="/front_end_news//sport/" className="hover:underline">
          Sports
        </a>
      </div>
    </div>
  );
}

export default Navbar;
