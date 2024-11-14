import { Carousel } from "antd";
import entertainment_big1 from "../assets/images/entertainment/entertainment_big1.jpg";
import entertainment_big2 from "../assets/images/entertainment/entertainment_big2.jpg";
import entertainment_small1 from "../assets/images/entertainment/entertainment_small1.jpg";
import entertainment_small2 from "../assets/images/entertainment/entertainment_small2.jpg";
import entertainment_small3 from "../assets/images/entertainment/entertainment_small3.jpg";
import entertainment_small4 from "../assets/images/entertainment/entertainment_small4.jpg";
import entertainment_small5 from "../assets/images/entertainment/entertainment_small5.jpg";
import entertainment_small6 from "../assets/images/entertainment/entertainment_small6.jpg";
import entertainment_small7 from "../assets/images/entertainment/entertainment_small7.jpg";
import entertainment_small8 from "../assets/images/entertainment/entertainment_small8.jpg";
import entertainment_small9 from "../assets/images/entertainment/entertainment_small9.jpg";
import entertainment_small10 from "../assets/images/entertainment/entertainment_small10.jpg";
import entertainment_small11 from "../assets/images/entertainment/entertainment_small11.jpg";
import entertainment_small12 from "../assets/images/entertainment/entertainment_small12.jpg";

function Entertainment() {
  return (
    <div
      id="sport"
      className="flex flex-row justify-center mt-[100px] animate-slide_left_center phone:mt-10 "
    >
      <div className="flex flex-col items-start pb-5  bg-white shadow-lg phone:w-[95vw] ">
        <h1 className="font-bold text-xl text-white  bg-pink-600 py-1 px-2 rounded-tr-2xl phone:rounded-tr-xl phone:text-sm ">
          Entertainment:
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
                    src={entertainment_big1}
                    alt=""
                    className="h-[300px] m-auto phone:h-[170px] "
                  />
                </div>
                <div className="flex flex-col justify-evenly h-[300px] tablet:h-fit tablet:flex-row  tablet:gap-5 tablet:py-10 phone:h-fit  phone:gap-5 phone:py-5">
                  <div className="flex flex-row gap-3 tablet:flex-col tablet:gap-10 phone:gap-2">
                    <div className=" w-[200px] h-[100px] phone:h-auto phone:w-auto">
                      <img
                        src={entertainment_small1}
                        alt=""
                        className="w-[200px] h-[100px] rounded-md phone:w-[150px] phone:h-[80px] hover:-translate-y-2 transition-all duration-300 ease-in-out"
                      />
                      <p className="text-white text-sm">Description</p>
                    </div>
                    <div className=" w-[200px] h-[100px] phone:h-auto phone:w-auto">
                      <img
                        src={entertainment_small2}
                        alt=""
                        className="w-[200px] h-[100px] rounded-md phone:w-[150px] phone:h-[80px] hover:-translate-y-2 transition-all duration-300 ease-in-out"
                      />
                      <p className="text-white text-sm">Description</p>
                    </div>
                    <div className=" w-[200px] h-[100px] phone:h-auto phone:w-auto">
                      <img
                        src={entertainment_small3}
                        alt=""
                        className="w-[200px] h-[100px] rounded-md phone:w-[150px] phone:h-[80px] hover:-translate-y-2 transition-all duration-300 ease-in-out"
                      />
                      <p className="text-white text-sm">Description</p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-3 tablet:flex-col tablet:gap-10 phone:gap-2">
                    <div className=" w-[200px] h-[100px] phone:h-auto phone:w-auto">
                      <img
                        src={entertainment_small4}
                        alt=""
                        className="w-[200px] h-[100px] rounded-md phone:w-[150px] phone:h-[80px] hover:-translate-y-2 transition-all duration-300 ease-in-out"
                      />
                      <p className="text-white text-sm">Description</p>
                    </div>
                    <div className=" w-[200px] h-[100px] phone:h-auto phone:w-auto">
                      <img
                        src={entertainment_small5}
                        alt=""
                        className="w-[200px] h-[100px] rounded-md phone:w-[150px] phone:h-[80px] hover:-translate-y-2 transition-all duration-300 ease-in-out"
                      />
                      <p className="text-white text-sm">Description</p>
                    </div>
                    <div className=" w-[200px] h-[100px] phone:h-auto phone:w-auto">
                      <img
                        src={entertainment_small6}
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
                    src={entertainment_big2}
                    alt=""
                    className="h-[300px] m-auto phone:h-[170px] "
                  />
                </div>
                <div className="flex flex-col justify-evenly h-[300px] tablet:h-fit tablet:flex-row  tablet:gap-5 tablet:py-10 phone:h-fit  phone:gap-5 phone:py-5">
                  <div className="flex flex-row gap-3 tablet:flex-col tablet:gap-10 phone:gap-2">
                    <div className=" w-[200px] h-[100px] phone:h-auto phone:w-auto">
                      <img
                        src={entertainment_small7}
                        alt=""
                        className="w-[200px] h-[100px] rounded-md phone:w-[150px] phone:h-[80px] hover:-translate-y-2 transition-all duration-300 ease-in-out"
                      />
                      <p className="text-white text-sm">Description</p>
                    </div>
                    <div className=" w-[200px] h-[100px] phone:h-auto phone:w-auto">
                      <img
                        src={entertainment_small8}
                        alt=""
                        className="w-[200px] h-[100px] rounded-md phone:w-[150px] phone:h-[80px] hover:-translate-y-2 transition-all duration-300 ease-in-out"
                      />
                      <p className="text-white text-sm">Description</p>
                    </div>
                    <div className=" w-[200px] h-[100px] phone:h-auto phone:w-auto">
                      <img
                        src={entertainment_small9}
                        alt=""
                        className="w-[200px] h-[100px] rounded-md phone:w-[150px] phone:h-[80px] hover:-translate-y-2 transition-all duration-300 ease-in-out"
                      />
                      <p className="text-white text-sm">Description</p>
                    </div>
                  </div>
                  <div className="flex flex-row gap-3 tablet:flex-col tablet:gap-10 phone:gap-2">
                    <div className=" w-[200px] h-[100px] phone:h-auto phone:w-auto">
                      <img
                        src={entertainment_small10}
                        alt=""
                        className="w-[200px] h-[100px] rounded-md phone:w-[150px] phone:h-[80px] hover:-translate-y-2 transition-all duration-300 ease-in-out"
                      />
                      <p className="text-white text-sm">Description</p>
                    </div>
                    <div className=" w-[200px] h-[100px] phone:h-auto phone:w-auto">
                      <img
                        src={entertainment_small11}
                        alt=""
                        className="w-[200px] h-[100px] rounded-md phone:w-[150px] phone:h-[80px] hover:-translate-y-2 transition-all duration-300 ease-in-out"
                      />
                      <p className="text-white text-sm">Description</p>
                    </div>
                    <div className=" w-[200px] h-[100px] phone:h-auto phone:w-auto">
                      <img
                        src={entertainment_small12}
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

export default Entertainment;
