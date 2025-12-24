import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

import {
  MapPinLineIcon,
  SnowflakeIcon,
  FireIcon,
  FeatherIcon,
} from "@phosphor-icons/react";

// local weather icons
import sun from "../assets/sun.png";
import cloudy_day from "../assets/cloudy_day.png";
import rain from "../assets/rain.png";
import rain_thunder from "../assets/rain_thunder.png";
import wind from "../assets/wind.png";

function CurrentWeatherCard({ forecast, loading, currentTemp }) {
  // safely extract current forecast item
  const current = forecast?.list?.[0];
  const condition = current?.weather?.[0]?.main;

  // map API "main" → local icons
  const weatherImageMap = {
    Clear: sun,
    Clouds: cloudy_day,
    Rain: rain,
    Thunderstorm: rain_thunder,
    Wind: wind,
  };

  const weatherImage = weatherImageMap[condition] || cloudy_day;

  return (
    <div className="bg-linear-to-r from-[#9CBCFF] to-[#6497FF] rounded-2xl flex flex-col justify-center items-center px-4 py-6 gap-2 my-4">
      {/* weather icon */}
      <img
        src={weatherImage}
        alt={condition || "weather"}
        className="w-34 h-34"
      />

      {/* temperature */}
      <span className="text-white font-medium text-5xl tracking-tighter">
        {loading ? (
          <Skeleton width={100} baseColor="#5E8CF6" />
        ) : (
          currentTemp ?? "--"
        )}
        °C
      </span>

      {/* condition */}
      <span className="text-white font-medium text-xl">
        {condition || "--"}
      </span>

      {/* city */}
      <span className="text-white font-medium text-xl flex items-center">
        <MapPinLineIcon size={20} className="mr-1" weight="fill" />
        {forecast?.city?.name || "--"}
      </span>

      {/* details */}
      <div className="w-full p-2">
        {/* feels like */}
        <div className="flex justify-around p-1">
          <div className="flex items-center">
            <FeatherIcon
              size={18}
              color="#fff"
              weight="fill"
              className="mr-1"
            />
            <span className="text-white text-md font-medium">Feels Like</span>
          </div>
          <span className="text-white text-md font-medium">
            {current?.main?.feels_like ?? "--"}°C
          </span>
        </div>

        {/* min temp */}
        <div className="flex justify-around p-1">
          <div className="flex items-center">
            <SnowflakeIcon
              size={18}
              color="#fff"
              weight="fill"
              className="mr-1"
            />
            <span className="text-white text-md font-medium">Min Temp</span>
          </div>
          <span className="text-white text-md font-medium">
            {current?.main?.temp_min ?? "--"}°C
          </span>
        </div>

        {/* max temp */}
        <div className="flex justify-around p-1">
          <div className="flex items-center">
            <FireIcon size={18} color="#fff" weight="fill" className="mr-1" />
            <span className="text-white text-md font-medium">Max Temp</span>
          </div>
          <span className="text-white text-md font-medium">
            {current?.main?.temp_max ?? "--"}°C
          </span>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeatherCard;
