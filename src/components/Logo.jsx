import { RiPhoneFill } from "react-icons/ri";
import { MdOutgoingMail } from "react-icons/md";
function Logo() {
  return (
    <div className="">
      <div className="flex flex-row justify-between  bg-black  text-gray-400 px-2 pt-10 pb-5 phone:px-1 phone:pt-5 phone:pb-3">
        <a href="/">
          <h1 className="text-3xl text-red-600 font-bold animate-bounce ml-10 phone:text-2xl phone:ml-5 ">
            LOGO
          </h1>
        </a>
        <div className="flex flex-col  text-gray-400 italic ">
          <div className="flex flex-row gap-2 items-center phone:gap-1">
            <RiPhoneFill className="text-red-600" />{" "}
            <p className="">010895335</p>
          </div>
          <div className="flex flex-row gap-2 items-center phone:gap-1">
            <MdOutgoingMail className="text-red-600" />
            <p className="">sokhinsing04@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Logo;
