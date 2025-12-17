import React from "react";

function WeatherCard({ src, weather='rain', day, temp = 25 }) {
  return (
    <>
      <div className="card bg-white shadow rounded-2xl p-2 flex flex-col justify-center items-center  w-full py-6">
        <span className="font-medium text-gray-500 text-md">{day}</span>
        <img src={src} alt={src} className="w-24 h-24 flex items-center justify-center" />
        <span className="font-medium text-[#5E8CF6] text-lg">{temp}°</span>
        <span>{weather}</span>
      </div>
    </>
  );
}

export default WeatherCard;
