import { Carousel } from "antd";
import techno_big1 from "../assets/images/technology/techno_big1.png";
import techno_small1 from "../assets/images/technology/techno_small1.jpg";
import techno_small2 from "../assets/images/technology/techno_small2.jpg";
import techno_small3 from "../assets/images/technology/techno_small3.png";
import techno_small4 from "../assets/images/technology/techno_small4.jpg";
import techno_small5 from "../assets/images/technology/techno_small5.png";
import techno_small6 from "../assets/images/technology/techno_small6.jpg";

function Technology() {
  return (
    <div
      id="sport"
      className="flex flex-row justify-center mt-[100px]  animate-slide_right_center phone:mt-10 "
    >
      <div className="flex flex-col items-start pb-5 bg-white shadow-lg phone:w-[95vw] ">
        <h1 className="font-bold text-xl text-white  bg-purple-500 py-1 px-2 rounded-tr-2xl phone:rounded-tr-xl phone:text-sm ">
          Technology:
        </h1>
        <div className="border-t-8 border-purple-500">
          <Carousel
            arrows
            className="w-[80vw] h-[300px]  m-auto tablet:h-fit  phone:w-[95vw] phone:h-fit "
          >
            <div>
              <div className="bg-black w-[100%] h-[300px] flex flex-row justify-center items-center gap-10  text-white tablet:h-fit tablet:flex-col tablet:gap-2 ">
                <div className="bg-black w-[500px] h-[300px] tablet:w-[95vw] tablet:h-fit phone:w-[100%]">
                  <img
                    src={techno_big1}
                    alt=""
                    className="h-[300px] m-auto phone:h-[170px] "
                  />
                </div>
                <div className="flex flex-col justify-evenly h-[300px] tablet:h-fit tablet:flex-row  tablet:gap-5 tablet:py-10 phone:h-fit  phone:gap-5 phone:py-5">
                  <div className="flex flex-row gap-3 tablet:flex-col tablet:gap-10 phone:gap-2">
                    <div className=" w-[200px] h-[100px] phone:h-auto phone:w-auto">
                      <img
                        src={techno_small1}
                        alt=""
                        className="w-[200px] h-[100px] rounded-md phone:w-[150px] phone:h-[80px] hover:-translate-y-2 transition-all duration-300 ease-in-out"
                      />
                      <p className="text-white text-sm">Description</p>
                    </div>
                    <div className=" w-[200px] h-[100px] phone:h-auto phone:w-auto">
                      <img
                        src={techno_small2}
                        alt=""
                        className="w-[200px] h-[100px] rounded-md phone:w-[150px] phone:h-[80px] hover:-translate-y-2 transition-all duration-300 ease-in-out"
                      />
                      <p className="text-white text-sm">Description</p>
                    </div>
                    <div className=" w-[200px] h-[100px] phone:h-auto phone:w-auto">
                      <img
                        src={techno_small3}
                        alt=""
                        className="w-[200px] h-[100px] rounded-md phone:w-[150px] phone:h-[80px] hover:-translate-y-2 transition-all duration-300 ease-in-out"
                      />
                      <p className="text-white text-sm">Description</p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-3 tablet:flex-col tablet:gap-10 phone:gap-2">
                    <div className=" w-[200px] h-[100px] phone:h-auto phone:w-auto">
                      <img
                        src={techno_small4}
                        alt=""
                        className="w-[200px] h-[100px] rounded-md phone:w-[150px] phone:h-[80px] hover:-translate-y-2 transition-all duration-300 ease-in-out"
                      />
                      <p className="text-white text-sm">Description</p>
                    </div>
                    <div className=" w-[200px] h-[100px] phone:h-auto phone:w-auto">
                      <img
                        src={techno_small5}
                        alt=""
                        className="w-[200px] h-[100px] rounded-md phone:w-[150px] phone:h-[80px] hover:-translate-y-2 transition-all duration-300 ease-in-out"
                      />
                      <p className="text-white text-sm">Description</p>
                    </div>
                    <div className=" w-[200px] h-[100px] phone:h-auto phone:w-auto">
                      <img
                        src={techno_small6}
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
                    src={techno_big1}
                    alt=""
                    className="h-[300px] m-auto phone:h-[170px] "
                  />
                </div>
                <div className="flex flex-col justify-evenly h-[300px] tablet:h-fit tablet:flex-row  tablet:gap-5 tablet:py-10 phone:h-fit  phone:gap-5 phone:py-5">
                  <div className="flex flex-row gap-3 tablet:flex-col tablet:gap-10 phone:gap-2">
                    <div className=" w-[200px] h-[100px] phone:h-auto phone:w-auto">
                      <img
                        src={techno_small1}
                        alt=""
                        className="w-[200px] h-[100px] rounded-md phone:w-[150px] phone:h-[80px] hover:-translate-y-2 transition-all duration-300 ease-in-out"
                      />
                      <p className="text-white text-sm">Description</p>
                    </div>
                    <div className=" w-[200px] h-[100px] phone:h-auto phone:w-auto">
                      <img
                        src={techno_small2}
                        alt=""
                        className="w-[200px] h-[100px] rounded-md phone:w-[150px] phone:h-[80px] hover:-translate-y-2 transition-all duration-300 ease-in-out"
                      />
                      <p className="text-white text-sm">Description</p>
                    </div>
                    <div className=" w-[200px] h-[100px] phone:h-auto phone:w-auto">
                      <img
                        src={techno_small3}
                        alt=""
                        className="w-[200px] h-[100px] rounded-md phone:w-[150px] phone:h-[80px] hover:-translate-y-2 transition-all duration-300 ease-in-out"
                      />
                      <p className="text-white text-sm">Description</p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-3 tablet:flex-col tablet:gap-10 phone:gap-2">
                    <div className=" w-[200px] h-[100px] phone:h-auto phone:w-auto">
                      <img
                        src={techno_small4}
                        alt=""
                        className="w-[200px] h-[100px] rounded-md phone:w-[150px] phone:h-[80px] hover:-translate-y-2 transition-all duration-300 ease-in-out"
                      />
                      <p className="text-white text-sm">Description</p>
                    </div>
                    <div className=" w-[200px] h-[100px] phone:h-auto phone:w-auto">
                      <img
                        src={techno_small5}
                        alt=""
                        className="w-[200px] h-[100px] rounded-md phone:w-[150px] phone:h-[80px] hover:-translate-y-2 transition-all duration-300 ease-in-out"
                      />
                      <p className="text-white text-sm">Description</p>
                    </div>
                    <div className=" w-[200px] h-[100px] phone:h-auto phone:w-auto">
                      <img
                        src={techno_small6}
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

export default Technology;