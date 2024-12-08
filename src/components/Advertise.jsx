/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

function Advertise({ onClose }) {
  const [countdown, setCountdown] = useState(5); // Countdown state

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer); // Clear the timer on unmount
    } else {
      onClose(); // Automatically close the popup when countdown reaches 0
    }
  }, [countdown, onClose]);

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50 ">
      <div className="bg-white p-5 rounded shadow-lg text-center relative animate-slide_bottom_center phone:animate-none">
        <h2 className="text-xl font-bold mb-4">Special Advertisement</h2>
        <img
          src="https://i.pinimg.com/736x/6d/5b/23/6d5b230ccf2926522a43992e35c74586.jpg" // Replace with your ad image URL
          alt="Advertisement"
          className="w-[400px] phone:w-[300px]"
        />
        <p className="text-md absolute top-2 left-2 bg-gray-200 px-3 py-1 rounded-full">
          {countdown}
        </p>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-xl font-bold text-red-600 hover:text-red-800"
        >
          ×
        </button>
      </div>
    </div>
  );
}

export default Advertise;
