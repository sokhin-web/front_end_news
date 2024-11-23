import Highlight from "./components/Highlight";
import Sport from "./components/Sport";
import Entertainment from "./components/Entertainment";
import Technology from "./components/Technology";
import Society from "./components/Society";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Master_Web from "./master_web/Master_Web";
import HomePage from "./master_web/HomePage";
import { useState } from "react";
import { RiMoonClearFill } from "react-icons/ri";

export default function App() {
  const [appStyle, setAppStyle] = useState("bg-[#F5F7F8]");
  const [nav_bg, setNav_bg] = useState("bg-red-600");
  const [text_color, setText_color] = useState("text-red-600");
  const [hover_text_color, setHover_text_color] =
    useState("hover:text-red-600");
  const toggleStyle = () => {
    setAppStyle((prevClass) =>
      prevClass.includes("bg-[#F5F7F8]") ? "bg-[#257180] " : "bg-[#F5F7F8] "
    );
    setNav_bg((prevClass) =>
      prevClass.includes("bg-red-600") ? "bg-[#fc7e3f]" : "bg-red-600"
    );
    setText_color((prevClass) =>
      prevClass.includes("text-red-600") ? "text-[#fc7e3f]" : "text-red-600"
    );
    setHover_text_color((prevClass) =>
      prevClass.includes("hover:text-red-600")
        ? "hover:text-[#fc7e3f]"
        : "hover:text-red-600"
    );
  };
  return (
    <div className={`scroll-smooth ${appStyle}`}>
      <BrowserRouter>
        <Routes>
          <Route
            basename="/front_end_news"
            element={
              <Master_Web
                moon={
                  <button onClick={toggleStyle}>
                    <RiMoonClearFill className="animate-pulse" />
                  </button>
                }
                nav_bg={nav_bg}
                text_color={text_color}
                hover_text_color={hover_text_color}
              />
            }
          >
            <Route path="/front_end_news/" element={<HomePage />}></Route>
            <Route
              path="/front_end_news/highlight/"
              element={<Highlight />}
            ></Route>
            <Route path="/front_end_news/sport/" element={<Sport />}></Route>
            <Route
              path="/front_end_news/entertainment/"
              element={<Entertainment />}
            ></Route>
            <Route
              path="/front_end_news/technology/"
              element={<Technology />}
            ></Route>
            <Route
              path="/front_end_news/society/"
              element={<Society />}
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
