import { Carousel } from "antd";
import image_hi1 from "../assets/images/hi1.jpg";
import image_hi2 from "../assets/images/hi2.jpg";
import image_hi3 from "../assets/images/hi3.jpg";
import image_hi4 from "../assets/images/hi4.jpeg";
import image_hi5 from "../assets/images/hi5.jpg";
import image_hi6 from "../assets/images/hi6.jpg";
import image_hi7 from "../assets/images/hi7.jpg";
import image_hi8 from "../assets/images/hi8.jpg";
import image_hi9 from "../assets/images/hi9.jpg";
import image_hi10 from "../assets/images/hi10.jpg";
import image_hi11 from "../assets/images/hi11.jpg";
import image_hi12 from "../assets/images/hi12.jpg";
import image1 from "../assets/images/av1.jpg";
import image2 from "../assets/images/av2.jpg";
import image3 from "../assets/images/av3.jpg";
import image4 from "../assets/images/av4.jpg";
import image5 from "../assets/images/av5.jpg";
import image6 from "../assets/images/av6.jpg";
function Highlight() {
  return (
    <div className="mt-10 flex flex-row justify-center animate-slide_right_center ">
      <div className=" flex flex-col  items-start  pb-5 bg-white shadow-lg ">
        <h1 className="font-bold text-xl text-white bg-sky-600 py-1 px-2 rounded-tr-2xl phone:text-sm">
          Highlight:
        </h1>
        <div className=" flex flex-row gap-2  justify-center items-center  phone:flex-col phone:gap-1 ">
          <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-2 ">
              <Carousel
                autoplay
                className="w-[500px] h-[300px]  m-auto phone:w-[45vw] phone:h-[100px]"
              >
                <div className="bg-black w-[500px] h-[300px]  phone:w-[45vw] phone:h-[100px]">
                  <img
                    src={image_hi1}
                    alt=""
                    className="h-[100px]  phone:w-[45vw]"
                  />
                </div>
                <div className="bg-black  w-[500px] h-[300px]  phone:w-[45vw] phone:h-[100px]">
                  <img
                    src={image_hi2}
                    alt=""
                    className="h-[100px]  phone:w-[45vw]"
                  />
                </div>
                <div className="bg-black  w-[500px] h-[300px]  phone:w-[45vw] phone:h-[100px]">
                  <img
                    src={image_hi3}
                    alt=""
                    className="h-[100px]  phone:w-[45vw]"
                  />
                </div>
              </Carousel>
              <Carousel
                autoplay
                className="w-[500px] h-[300px]  m-auto phone:w-[45vw] phone:h-[100px]"
              >
                <div className="bg-black  w-[500px] h-[300px] phone:w-[45vw] phone:h-[100px]">
                  <img
                    src={image_hi4}
                    alt=""
                    className="h-[300px] phone:w-[45vw] phone:h-[100px]"
                  />
                </div>
                <div className="bg-black  w-[500px] h-[300px] phone:w-[45vw] phone:h-[100px]">
                  <img
                    src={image_hi5}
                    alt=""
                    className="h-[300px] phone:w-[45vw] phone:h-[100px]"
                  />
                </div>
                <div className="bg-black  w-[500px] h-[300px] phone:w-[45vw] phone:h-[100px]">
                  <img
                    src={image_hi6}
                    alt=""
                    className="h-[300px] phone:w-[45vw] phone:h-[100px]"
                  />
                </div>
              </Carousel>
            </div>
            <div className="flex flex-row gap-2 phone:hidden">
              <Carousel autoplay className="w-[500px] h-[300px]  m-auto">
                <div className="bg-black w-[500px] h-[300px]">
                  <img src={image_hi7} alt="" className="h-[300px]" />
                </div>
                <div className="bg-black w-[500px] h-[300px]">
                  <img src={image_hi8} alt="" className="h-[300px]" />
                </div>
                <div className="bg-black  w-[500px] h-[300px]">
                  <img src={image_hi9} alt="" className="h-[300px]" />
                </div>
              </Carousel>
              <Carousel autoplay className="w-[500px] h-[300px]  m-auto">
                <div className="bg-black  w-[500px] h-[300px]">
                  <img src={image_hi10} alt="" className="h-[300px]" />
                </div>
                <div className="bg-black w-[500px] h-[300px]">
                  <img src={image_hi11} alt="" className="h-[300px]" />
                </div>
                <div className="bg-black  w-[500px] h-[300px]">
                  <img src={image_hi12} alt="" className="h-[300px]" />
                </div>
              </Carousel>
            </div>
          </div>
          <div className="flex flex-col gap-2 phone:flex-row phone:gap-2 phone:justify-between">
            <Carousel
              autoplay
              className="w-[300px] h-[300px]  m-auto phone:w-[45vw] phone:h-[200px]"
            >
              <div className="bg-red-500 w-[300px] h-[300px] phone:w-[45vw] phone:h-[200px]">
                <img
                  src={image1}
                  alt=""
                  className="phone:w-[45vw] phone:h-[200px]"
                />
              </div>
              <div className="bg-blue-500 w-[300px] h-[300px] phone:w-[45vw] phone:h-[200px]">
                <img
                  src={image2}
                  alt=""
                  className="phone:w-[45vw] phone:h-[200px]"
                />
              </div>
              <div className="bg-green-500 w-[300px] h-[300px] phone:w-[45vw] phone:h-[200px]">
                <img
                  src={image3}
                  alt=""
                  className="phone:w-[45vw] phone:h-[200px]"
                />
              </div>
            </Carousel>
            <Carousel
              autoplay
              className="w-[300px] h-[300px]  m-auto phone:w-[45vw] phone:h-[200px]"
            >
              <div className="bg-red-500 w-[300px] h-[300px] phone:w-[45vw] phone:h-[200px]">
                <img
                  src={image4}
                  alt=""
                  className="phone:w-[45vw] phone:h-[200px]"
                />
              </div>
              <div className="bg-blue-500 w-[300px] h-[300px] phone:w-[45vw] phone:h-[200px]">
                <img
                  src={image5}
                  alt=""
                  className="phone:w-[45vw] phone:h-[200px]"
                />
              </div>
              <div className="bg-green-500 w-[300px] h-[300px] phone:w-[45vw] phone:h-[200px]">
                <img
                  src={image6}
                  alt=""
                  className="phone:w-[45vw] phone:h-[200px]"
                ></img>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Highlight;
