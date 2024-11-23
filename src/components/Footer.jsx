/* eslint-disable react/prop-types */
import {
  RiFacebookBoxFill,
  RiInstagramFill,
  RiMailAddFill,
  RiPhoneCameraFill,
  RiTelegramFill,
  RiTiktokFill,
  RiYoutubeFill,
} from "react-icons/ri";

function Footer({ text_color, hover_text_color }) {
  const followData = [
    {
      id: 1,
      icon: <RiFacebookBoxFill />,
      text: "Facebook",
    },
    {
      id: 2,
      icon: <RiInstagramFill />,
      text: "Instagram",
    },
    {
      id: 3,
      icon: <RiYoutubeFill />,
      text: "Youtube",
    },
    {
      id: 4,
      icon: <RiTiktokFill />,
      text: "Tiktok",
    },
  ];

  const contactData = [
    {
      id: 2,
      icon: <RiPhoneCameraFill />,
      text: "010895335",
    },
    {
      id: 1,
      icon: <RiTelegramFill />,
      text: "Telegram",
    },
    {
      id: 3,
      icon: <RiMailAddFill />,
      text: "sokhin@gmail.com",
    },
  ];

  return (
    <div className=" bg-black w-full h-fit mt-[100px] animate-slide_bottom_center phone:mt-10">
      <div className="flex flex-row justify-around text-gray-400 px-5 py-10">
        <div className="flex flex-col gap-5 text-2xl font-bold phone:text-lg">
          <h1 className={`${text_color}`}>Follow Us</h1>
          <div className="flex flex-col gap-2 text-xl phone:text-sm">
            <div className="flex flex-col gap-2 items-left ">
              {followData.map((data) => (
                <div
                  key={data.id}
                  className={`flex flex-row gap-2 items-center ${hover_text_color}`}
                >
                  {data.icon}
                  <p key={data.id} className="">
                    {data.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 text-2xl font-bold phone:text-lg">
          <h1 className={`${text_color}`}>Contact Us</h1>
          <div className="flex flex-col gap-2 text-xl phone:text-sm">
            {contactData.map((data) => (
              <div
                key={data.id}
                className={`flex flex-row gap-2 items-center ${hover_text_color}`}
              >
                {data.icon}
                <p key={data.id} className="">
                  {data.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
