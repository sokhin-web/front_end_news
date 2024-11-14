import { Carousel } from "antd";
import football_big1 from "../assets/images/sports/football_big1.jpg";
import football_small1 from "../assets/images/sports/football_small1.jpg";
import football_small2 from "../assets/images/sports/football_small2.jpg";
import football_small3 from "../assets/images/sports/football_small3.jpg";
import football_small4 from "../assets/images/sports/football_small4.jpg";
import football_small5 from "../assets/images/sports/football_small5.jpg";
import football_small6 from "../assets/images/sports/football_small6.jpg";
import volleyball_big1 from "../assets/images/sports/volleyball_big1.jpg";
import volleyball_small1 from "../assets/images/sports/volleyball_small1.jpg";
import volleyball_small2 from "../assets/images/sports/volleyball_small2.jpg";
import volleyball_small3 from "../assets/images/sports/volleyball_small3.jpg";
import volleyball_small4 from "../assets/images/sports/volleyball_small4.jpg";
import volleyball_small5 from "../assets/images/sports/volleyball_small5.jpg";
import volleyball_small6 from "../assets/images/sports/volleyball_small6.jpg";
import tennis_big1 from "../assets/images/sports/tennis_big1.jpg";
import tennis_small1 from "../assets/images/sports/tennis_small1.jpg";
import tennis_small2 from "../assets/images/sports/tennis_small2.jpg";
import tennis_small3 from "../assets/images/sports/tennis_small3.jpg";
import tennis_small4 from "../assets/images/sports/tennis_small4.jpg";
import tennis_small5 from "../assets/images/sports/tennis_small5.jpg";
import tennis_small6 from "../assets/images/sports/tennis_small6.jpg";
function Sport() {
  return (
    <div
      id="sport"
      className="flex flex-row justify-center mt-[100px] animate-slide_right_center phone:mt-10 "
    >
      <div className="flex flex-col items-start pb-5 bg-white shadow-lg phone:w-[95vw] ">
        <h1 className="font-bold text-xl text-white  bg-green-600 py-1 px-2 rounded-tr-2xl phone:rounded-tr-xl phone:text-sm ">
          Sports:
        </h1>
        <div className="border-t-8 border-green-600">
          <Carousel
            arrows
            className="w-[80vw] h-[300px]  m-auto tablet:h-fit  phone:w-[95vw] phone:h-fit "
          >
            <div>
              <div className="bg-black w-[100%] h-[300px] flex flex-row justify-center items-center gap-10  text-white tablet:h-fit tablet:flex-col tablet:gap-2 ">
                <div className="bg-black w-[500px] h-[300px] tablet:w-[95vw] tablet:h-fit phone:w-[100%]">
                  <img
                    src={football_big1}
                    alt=""
                    className="h-[300px] m-auto phone:h-[170px] "
                  />
                </div>
                <div className="flex flex-col justify-evenly h-[300px] tablet:h-fit tablet:flex-row  tablet:gap-5 tablet:py-10 phone:h-fit  phone:gap-5 phone:py-5">
                  <div className="flex flex-row gap-3 tablet:flex-col tablet:gap-10 phone:gap-2">
                    <div className=" w-[200px] h-[100px] phone:h-auto phone:w-auto">
                      <img
                        src={football_small1}
                        alt=""
                        className="w-[200px] h-[100px] rounded-md phone:w-[150px] phone:h-[80px] hover:-translate-y-2 transition-all duration-300 ease-in-out"
                      />
                      <p className="text-white text-sm">Description</p>
                    </div>
                    <div className=" w-[200px] h-[100px] phone:h-auto phone:w-auto">
                      <img
                        src={football_small2}
                        alt=""
                        className="w-[200px] h-[100px] rounded-md phone:w-[150px] phone:h-[80px] hover:-translate-y-2 transition-all duration-300 ease-in-out"
                      />
                      <p className="text-white text-sm">Description</p>
                    </div>
                    <div className=" w-[200px] h-[100px] phone:h-auto phone:w-auto">
                      <img
                        src={football_small3}
                        alt=""
                        className="w-[200px] h-[100px] rounded-md phone:w-[150px] phone:h-[80px] hover:-translate-y-2 transition-all duration-300 ease-in-out"
                      />
                      <p className="text-white text-sm">Description</p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-3 tablet:flex-col tablet:gap-10 phone:gap-2">
                    <div className=" w-[200px] h-[100px] phone:h-auto phone:w-auto">
                      <img
                        src={football_small4}
                        alt=""
                        className="w-[200px] h-[100px] rounded-md phone:w-[150px] phone:h-[80px] hover:-translate-y-2 transition-all duration-300 ease-in-out"
                      />
                      <p className="text-white text-sm">Description</p>
                    </div>
                    <div className=" w-[200px] h-[100px] phone:h-auto phone:w-auto">
                      <img
                        src={football_small5}
                        alt=""
                        className="w-[200px] h-[100px] rounded-md phone:w-[150px] phone:h-[80px] hover:-translate-y-2 transition-all duration-300 ease-in-out"
                      />
                      <p className="text-white text-sm">Description</p>
                    </div>
                    <div className=" w-[200px] h-[100px] phone:h-auto phone:w-auto">
                      <img
                        src={football_small6}
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
                    src={volleyball_big1}
                    alt=""
                    className="h-[300px] m-auto phone:h-[170px] "
                  />
                </div>
                <div className="flex flex-col justify-evenly h-[300px] tablet:h-fit tablet:flex-row  tablet:gap-5 tablet:py-10 phone:h-fit  phone:gap-5 phone:py-5">
                  <div className="flex flex-row gap-3 tablet:flex-col tablet:gap-10 phone:gap-2">
                    <div className=" w-[200px] h-[100px] phone:h-auto phone:w-auto">
                      <img
                        src={volleyball_small1}
                        alt=""
                        className="w-[200px] h-[100px] rounded-md phone:w-[150px] phone:h-[80px] hover:-translate-y-2 transition-all duration-300 ease-in-out"
                      />
                      <p className="text-white text-sm">Description</p>
                    </div>
                    <div className=" w-[200px] h-[100px] phone:h-auto phone:w-auto">
                      <img
                        src={volleyball_small2}
                        alt=""
                        className="w-[200px] h-[100px] rounded-md phone:w-[150px] phone:h-[80px] hover:-translate-y-2 transition-all duration-300 ease-in-out"
                      />
                      <p className="text-white text-sm">Description</p>
                    </div>
                    <div className=" w-[200px] h-[100px] phone:h-auto phone:w-auto">
                      <img
                        src={volleyball_small3}
                        alt=""
                        className="w-[200px] h-[100px] rounded-md phone:w-[150px] phone:h-[80px] hover:-translate-y-2 transition-all duration-300 ease-in-out"
                      />
                      <p className="text-white text-sm">Description</p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-3 tablet:flex-col tablet:gap-10 phone:gap-2">
                    <div className=" w-[200px] h-[100px] phone:h-auto phone:w-auto">
                      <img
                        src={volleyball_small4}
                        alt=""
                        className="w-[200px] h-[100px] rounded-md phone:w-[150px] phone:h-[80px] hover:-translate-y-2 transition-all duration-300 ease-in-out"
                      />
                      <p className="text-white text-sm">Description</p>
                    </div>
                    <div className=" w-[200px] h-[100px] phone:h-auto phone:w-auto">
                      <img
                        src={volleyball_small5}
                        alt=""
                        className="w-[200px] h-[100px] rounded-md phone:w-[150px] phone:h-[80px] hover:-translate-y-2 transition-all duration-300 ease-in-out"
                      />
                      <p className="text-white text-sm">Description</p>
                    </div>
                    <div className=" w-[200px] h-[100px] phone:h-auto phone:w-auto">
                      <img
                        src={volleyball_small6}
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
                    src={tennis_big1}
                    alt=""
                    className="h-[300px] m-auto phone:h-[170px] "
                  />
                </div>
                <div className="flex flex-col justify-evenly h-[300px] tablet:h-fit tablet:flex-row  tablet:gap-5 tablet:py-10 phone:h-fit  phone:gap-5 phone:py-5">
                  <div className="flex flex-row gap-3 tablet:flex-col tablet:gap-10 phone:gap-2">
                    <div className=" w-[200px] h-[100px] phone:h-auto phone:w-auto">
                      <img
                        src={tennis_small1}
                        alt=""
                        className="w-[200px] h-[100px] rounded-md phone:w-[150px] phone:h-[80px] hover:-translate-y-2 transition-all duration-300 ease-in-out"
                      />
                      <p className="text-white text-sm">Description</p>
                    </div>
                    <div className=" w-[200px] h-[100px] phone:h-auto phone:w-auto">
                      <img
                        src={tennis_small2}
                        alt=""
                        className="w-[200px] h-[100px] rounded-md phone:w-[150px] phone:h-[80px] hover:-translate-y-2 transition-all duration-300 ease-in-out"
                      />
                      <p className="text-white text-sm">Description</p>
                    </div>
                    <div className=" w-[200px] h-[100px] phone:h-auto phone:w-auto">
                      <img
                        src={tennis_small3}
                        alt=""
                        className="w-[200px] h-[100px] rounded-md phone:w-[150px] phone:h-[80px] hover:-translate-y-2 transition-all duration-300 ease-in-out"
                      />
                      <p className="text-white text-sm">Description</p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-3 tablet:flex-col tablet:gap-10 phone:gap-2">
                    <div className=" w-[200px] h-[100px] phone:h-auto phone:w-auto">
                      <img
                        src={tennis_small4}
                        alt=""
                        className="w-[200px] h-[100px] rounded-md phone:w-[150px] phone:h-[80px] hover:-translate-y-2 transition-all duration-300 ease-in-out"
                      />
                      <p className="text-white text-sm">Description</p>
                    </div>
                    <div className=" w-[200px] h-[100px] phone:h-auto phone:w-auto">
                      <img
                        src={tennis_small5}
                        alt=""
                        className="w-[200px] h-[100px] rounded-md phone:w-[150px] phone:h-[80px] hover:-translate-y-2 transition-all duration-300 ease-in-out"
                      />
                      <p className="text-white text-sm">Description</p>
                    </div>
                    <div className=" w-[200px] h-[100px] phone:h-auto phone:w-auto">
                      <img
                        src={tennis_small6}
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

export default Sport;
