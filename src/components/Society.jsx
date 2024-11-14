import { Carousel } from "antd";
import society_big1 from "../assets/images/society/society_big1.jpg";
import society_big2 from "../assets/images/society/society_big2.jpg";
import society_small1 from "../assets/images/society/society_small1.jpg";
import society_small2 from "../assets/images/society/society_small2.jpg";
import society_small3 from "../assets/images/society/society_small3.jpg";
import society_small4 from "../assets/images/society/society_small4.jpg";
import society_small5 from "../assets/images/society/society_small5.jpg";
import society_small6 from "../assets/images/society/society_small6.jpg";
import society_small7 from "../assets/images/society/society_small7.jpg";
import society_small8 from "../assets/images/society/society_small8.jpg";
import society_small9 from "../assets/images/society/society_small9.jpg";
import society_small10 from "../assets/images/society/society_small10.jpg";
import society_small11 from "../assets/images/society/society_small11.jpg";
import society_small12 from "../assets/images/society/society_small12.jpg";

function Society() {
  return (
    <div
      id="sport"
      className="flex flex-row justify-center mt-[100px] animate-slide_left_center phone:mt-10 "
    >
      <div className="flex flex-col items-start pb-5 bg-white shadow-lg phone:w-[95vw] ">
        <h1 className="font-bold text-xl text-white  bg-pink-600 py-1 px-2 rounded-tr-2xl phone:rounded-tr-xl phone:text-sm ">
          Society:
        </h1>
        <div className="border-t-8 border-pink-600">
          <Carousel
            arrows
            className="w-[80vw] h-[300px]  m-auto tablet:h-fit  phone:w-[95vw] phone:h-fit "
          >
            <div>
              <div className="bg-black w-[100%] h-[300px] flex flex-row justify-center items-center gap-10  text-white tablet:h-fit tablet:flex-col tablet:gap-2 ">
                <div className="bg-black w-[500px] h-[300px] tablet:w-[95vw] tablet:h-fit phone:w-[100%]">
                  <img
                    src={society_big1}
                    alt=""
                    className="h-[300px] m-auto phone:h-[170px] "
                  />
                </div>
                <div className="flex flex-col justify-evenly h-[300px] tablet:h-fit tablet:flex-row  tablet:gap-5 tablet:py-10 phone:h-fit  phone:gap-5 phone:py-5">
                  <div className="flex flex-row gap-3 tablet:flex-col tablet:gap-10 phone:gap-2">
                    <div className=" w-[200px] h-[100px] phone:h-auto phone:w-auto">
                      <img
                        src={society_small1}
                        alt=""
                        className="w-[200px] h-[100px] rounded-md phone:w-[150px] phone:h-[80px] hover:-translate-y-2 transition-all duration-300 ease-in-out"
                      />
                      <p className="text-white text-sm">Description</p>
                    </div>
                    <div className=" w-[200px] h-[100px] phone:h-auto phone:w-auto">
                      <img
                        src={society_small2}
                        alt=""
                        className="w-[200px] h-[100px] rounded-md phone:w-[150px] phone:h-[80px] hover:-translate-y-2 transition-all duration-300 ease-in-out"
                      />
                      <p className="text-white text-sm">Description</p>
                    </div>
                    <div className=" w-[200px] h-[100px] phone:h-auto phone:w-auto">
                      <img
                        src={society_small3}
                        alt=""
                        className="w-[200px] h-[100px] rounded-md phone:w-[150px] phone:h-[80px] hover:-translate-y-2 transition-all duration-300 ease-in-out"
                      />
                      <p className="text-white text-sm">Description</p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-3 tablet:flex-col tablet:gap-10 phone:gap-2">
                    <div className=" w-[200px] h-[100px] phone:h-auto phone:w-auto">
                      <img
                        src={society_small4}
                        alt=""
                        className="w-[200px] h-[100px] rounded-md phone:w-[150px] phone:h-[80px] hover:-translate-y-2 transition-all duration-300 ease-in-out"
                      />
                      <p className="text-white text-sm">Description</p>
                    </div>
                    <div className=" w-[200px] h-[100px] phone:h-auto phone:w-auto">
                      <img
                        src={society_small5}
                        alt=""
                        className="w-[200px] h-[100px] rounded-md phone:w-[150px] phone:h-[80px] hover:-translate-y-2 transition-all duration-300 ease-in-out"
                      />
                      <p className="text-white text-sm">Description</p>
                    </div>
                    <div className=" w-[200px] h-[100px] phone:h-auto phone:w-auto">
                      <img
                        src={society_small6}
                        alt=""
                        className="w-[200px] h-[100px] rounded-md phone:w-[150px] phone:h-[80px] hover:-translate-y-2 transition-all duration-300 ease-in-out"
                      />
                      <p className="text-white text-sm">Description</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-black w-[100%] h-[300px] flex flex-row justify-center items-center gap-10  text-white tablet:h-fit tablet:flex-col tablet:gap-2 ">
                <div className="bg-black w-[500px] h-[300px] tablet:w-[95vw] tablet:h-fit phone:w-[100%]">
                  <img
                    src={society_big2}
                    alt=""
                    className="h-[300px] m-auto phone:h-[170px] "
                  />
                </div>
                <div className="flex flex-col justify-evenly h-[300px] tablet:h-fit tablet:flex-row  tablet:gap-5 tablet:py-10 phone:h-fit  phone:gap-5 phone:py-5">
                  <div className="flex flex-row gap-3 tablet:flex-col tablet:gap-10 phone:gap-2">
                    <div className=" w-[200px] h-[100px] phone:h-auto phone:w-auto">
                      <img
                        src={society_small7}
                        alt=""
                        className="w-[200px] h-[100px] rounded-md phone:w-[150px] phone:h-[80px] hover:-translate-y-2 transition-all duration-300 ease-in-out"
                      />
                      <p className="text-white text-sm">Description</p>
                    </div>
                    <div className=" w-[200px] h-[100px] phone:h-auto phone:w-auto">
                      <img
                        src={society_small8}
                        alt=""
                        className="w-[200px] h-[100px] rounded-md phone:w-[150px] phone:h-[80px] hover:-translate-y-2 transition-all duration-300 ease-in-out"
                      />
                      <p className="text-white text-sm">Description</p>
                    </div>
                    <div className=" w-[200px] h-[100px] phone:h-auto phone:w-auto">
                      <img
                        src={society_small9}
                        alt=""
                        className="w-[200px] h-[100px] rounded-md phone:w-[150px] phone:h-[80px] hover:-translate-y-2 transition-all duration-300 ease-in-out"
                      />
                      <p className="text-white text-sm">Description</p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-3 tablet:flex-col tablet:gap-10 phone:gap-2">
                    <div className=" w-[200px] h-[100px] phone:h-auto phone:w-auto">
                      <img
                        src={society_small10}
                        alt=""
                        className="w-[200px] h-[100px] rounded-md phone:w-[150px] phone:h-[80px] hover:-translate-y-2 transition-all duration-300 ease-in-out"
                      />
                      <p className="text-white text-sm">Description</p>
                    </div>
                    <div className=" w-[200px] h-[100px] phone:h-auto phone:w-auto">
                      <img
                        src={society_small11}
                        alt=""
                        className="w-[200px] h-[100px] rounded-md phone:w-[150px] phone:h-[80px] hover:-translate-y-2 transition-all duration-300 ease-in-out"
                      />
                      <p className="text-white text-sm">Description</p>
                    </div>
                    <div className=" w-[200px] h-[100px] phone:h-auto phone:w-auto">
                      <img
                        src={society_small12}
                        alt=""
                        className="w-[200px] h-[100px] rounded-md phone:w-[150px] phone:h-[80px] hover:-translate-y-2 transition-all duration-300 ease-in-out"
                      />
                      <p className="text-white text-sm">Description</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Society;
