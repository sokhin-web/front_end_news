import Highlight from "./components/Highlight";
import Sport from "./components/Sport";
import Entertainment from "./components/Entertainment";
import Technology from "./components/Technology";
import Society from "./components/Society";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Master_Web from "../src/master_web/Master_Web";
import HomePage from "../src/master_web/HomePage";

export default function App() {
  return (
    <div className="scroll-smooth bg-[#F5F7F8] ">
      <BrowserRouter>
        <Routes>
          <Route element={<Master_Web />}>
            <Route path="/front_end_news" element={<HomePage />}></Route>
            <Route
              path="/front_end_news/highlight"
              element={<Highlight />}
            ></Route>
            <Route path="/front_end_news/sport" element={<Sport />}></Route>
            <Route
              path="/front_end_news/entertainment"
              element={<Entertainment />}
            ></Route>
            <Route
              path="/front_end_news/technology"
              element={<Technology />}
            ></Route>
            <Route path="/front_end_news/society" element={<Society />}></Route>
            <Route
              path="/*"
              element={
                <h2 className="text-center mt-[200px]">Page Not Found</h2>
              }
            ></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
