import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import {
  MapPinLineIcon,
  SunIcon,
  SunHorizonIcon,
  MoonStarsIcon,
  MagnifyingGlassIcon,
  DropIcon,
  WindIcon,
  SnowflakeIcon,
  FireIcon,
  ThermometerColdIcon,
  AngleIcon,
  SpeedometerIcon,
  FeatherIcon,
  DropSimpleIcon,
  EyeIcon,
  CrosshairIcon,
  FishSimpleIcon,
  ParkIcon,
} from "@phosphor-icons/react";
import React from "react";
import rain from "../assets/rain.png";
import cloudy_day from "../assets/cloudy_day.png";
import rain_thunder from "../assets/rain_thunder.png";
import sun from "../assets/sun.png";
import thunder from "../assets/thunder.png";
import wind from "../assets/wind.png";
import air from "../assets/air.png";

function CurrentWeatherCard({ forecast, loading, currentTemp }) {
  return (
    <>
      <div className="bg-linear-to-r from-[#9CBCFF] to-[#6497FF] rounded-2xl flex flex-col justify-center items-center px-4 py-6 gap-2 my-4">
        <img src={cloudy_day} alt="" className="w-34 h-34" />
        <span className="text-white font-medium text-5xl tracking-tighter">
          {loading ? (
            <Skeleton width={100} baseColor="#5E8CF6" />
          ) : (
            currentTemp ?? "--"
          )}
          °C
        </span>
        <span className="text-white font-medium text-xl ">
          {forecast?.list[0]?.weather[0]?.main}
        </span>

        <span className="text-white font-medium text-xl flex justify-center items-center">
          <MapPinLineIcon size={20} className="mr-1" weight="fill" />
          {forecast?.city?.name}
        </span>
        <div className="w-full p-2 ">
          <div className="flex justify-around p-1">
            <div className="flex justify-center items-center">
              <FeatherIcon
                size={18}
                color="#fff"
                weight="fill"
                className="mr-1"
              />
              <span className="text-white text-md font-medium ">
                Feels Like
              </span>
            </div>
            <span className="text-white text-md font-medium ">
              {forecast?.list[0]?.main?.feels_like}°C
            </span>
          </div>
          <div className="flex justify-around p-1">
            <div className="flex items-center justify-center">
              <SnowflakeIcon
                size={20}
                color="#fff"
                weight="fill"
                className="mr-1"
              />
              <span className="text-white text-md font-medium ">Min Temp</span>
            </div>
            <span className="text-white text-md font-medium ">
              {forecast?.list[0]?.main?.temp_min}°C
            </span>
          </div>
          <div className="flex justify-around p-1">
            <div className="flex items-center justify-center">
              <FireIcon size={20} color="#fff" weight="fill" className="mr-1" />
              <span className="text-white text-md font-medium ">Max Temp</span>
            </div>
            <span className="text-white text-md font-medium ">
              {forecast?.list[0]?.main?.temp_max}°C
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default CurrentWeatherCard;
