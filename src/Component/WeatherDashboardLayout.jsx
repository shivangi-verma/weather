import React from "react";
import rain from "../assets/rain.png";
import cloudy_day from "../assets/cloudy_day.png";
import rain_thunder from "../assets/rain_thunder.png";
import sun from "../assets/sun.png";
import thunder from "../assets/thunder.png";
import wind from "../assets/wind.png";
import air from "../assets/air.png";
import {
  MapPinIcon,
  SunIcon,
  SunHorizonIcon,
  MoonStarsIcon,
  MagnifyingGlassIcon,
  DropIcon,
  WindIcon,
} from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard";
import SunriseSunsetCard from "./SunriseSunsetCard";
import SunriseSunsetRow from "./SunriseSunsetRow";

export default function WeatherDashboardLayout() {
  const [todo, setTodo] = useState(null);
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&units=metric&appid=${API_KEY}
    `
    )
      .then((res) => res.json())
      .then((data) => {
        setTodo(data);
      });
  }, []);

  function getWeatherIcon(condition) {
    const iconMap = {
      Clear: sun,
      Clouds: cloudy_day,
      Rain: rain,
      Thunderstorm: rain_thunder,
      Wind: wind,
    };
    return iconMap[condition] || sun;
  }

  return (
    <>
      <div className="min-container flex ">
        <div className="left flex flex-col bg-[#f0f5ff]   w-7/10 px-20">
          <div className="greetings py-12 flex flex-col">
            <h1 className="text-5xl text-[#5E8CF6] font-bold">07:32 AM</h1>
            <span className="text-sm/6 font-medium">
              Wednesday, 14 April, 2025
            </span>
            <span className="text-7xl text-[#5E8CF6] font-medium tracking-tighter">
              Good morning, Asdf!
            </span>
          </div>
          <div className="weather-cards flex  justify-between gap-4 py-6">
            {todo?.list?.map((item, index) => {
              let timestamp = item.dt * 1000; // Convert to milliseconds
              let date = new Date(timestamp);

              if (date.getUTCHours() == "12")
                return (
                  <WeatherCard
                    key={index}
                    // src={air}
                    src={getWeatherIcon(item?.weather[0]?.main)}
                    weather={item?.weather[0]?.main}
                    day={date.toUTCString().slice(0, 3)}
                    temp={item.main.temp}
                  />
                );
            })}
          </div>
          {/* Air Quality Index and sunrise sunset  */}
          <div className="container-aqi-sunset flex justify-between gap-4 ">
            {/* left side aqi and monthly rain  */}
            <div className="flex flex-col gap-4 w-1/2">
              {/* air quality index  */}
              <div className="aqi-container bg-white rounded-2xl p-6 w-full">
                <div className="aqi-heading ">
                  <span className="text-2xl font-semibold">
                    Air Quality Index
                  </span>
                </div>
                <div className="aqi-value flex py-2 justify-between">
                  <div className="flex">
                    <img src={air} alt="" className="w-12 h-12 mr-2" />
                    <div className="aqi flex flex-col px-2">
                      <span className="">Good</span>
                      <span className="text-sm/4">
                        A perfect day for a walk!
                      </span>
                    </div>
                  </div>
                  <button className="bg-[#f3f9fd] text-[#7097DD] font-medium px-6 rounded-2xl hover:bg-[#e6eff4]">
                    Refresh
                  </button>
                </div>
                <div className="aqi-cards w-full flex gap-2 justify-between pt-2">
                  <div className="aqi-card flex bg-[#EBF9F5] text-green-400 font-medium flex-col px-3 py-6 rounded-xl items-center w-1/6">
                    <span>9.3</span>
                    <span>PM2</span>
                  </div>
                  <div className="aqi-card flex bg-[#EBF9F5] text-green-400 font-medium flex-col px-3 py-6 rounded-xl items-center w-1/6">
                    <span>9.3</span>
                    <span>PM10</span>
                  </div>
                  <div className="aqi-card flex bg-[#EBF9F5] text-green-400 font-medium flex-col px-3 py-6 rounded-xl items-center w-1/6">
                    <span>9.3</span>
                    <p>
                      SO<sub>2</sub>
                    </p>
                  </div>
                  <div className="aqi-card flex bg-[#EBF9F5] text-green-400 font-medium flex-col px-3 py-6 rounded-xl items-center w-1/6">
                    <span>9.3</span>
                    <p>
                      NO<sub>2</sub>
                    </p>
                  </div>
                  <div className="aqi-card flex bg-[#EBF9F5] text-green-400 font-medium flex-col px-3 py-6 rounded-xl items-center w-1/6">
                    <span>9.3</span>
                    <p>
                      O<sub>3</sub>
                    </p>
                  </div>
                  <div className="aqi-card flex bg-[#EBF9F5] text-green-400 font-medium flex-col px-3 py-6 rounded-xl items-center w-1/6">
                    <span>9.3</span>
                    <span>CO</span>
                  </div>
                </div>
              </div>
              {/* montly rain */}
              <div className="monthly-rain-container bg-white rounded-2xl p-6 w-full">
                <div className="aqi-heading ">
                  <span className="text-2xl font-semibold">
                    Monthly Rainfall
                  </span>
                </div>
                <div className="aqi-value flex py-2 justify-between">
                  <div className="flex">
                    <img src={rain} alt="" className="w-12 h-12 mr-2" />
                    <div className="aqi flex flex-col px-2">
                      <span className="">Good</span>
                      <span className="text-sm/4">
                        Getting good rain this month!
                      </span>
                    </div>
                  </div>
                  <button className="bg-[#f3f9fd] text-[#7097DD] font-medium px-6 rounded-2xl hover:bg-[#e6eff4]">
                    Refresh
                  </button>
                </div>
                <div className="aqi-cards w-full flex gap-2 justify-between pt-2">
                  <div className="aqi-card flex bg-[#EBF9F5] text-green-400 font-medium flex-col px-3 py-6 rounded-xl items-center w-1/6">
                    <span>9.3</span>
                    <span>PM2</span>
                  </div>
                  <div className="aqi-card flex bg-[#EBF9F5] text-green-400 font-medium flex-col px-3 py-6 rounded-xl items-center w-1/6">
                    <span>9.3</span>
                    <span>PM10</span>
                  </div>
                  <div className="aqi-card flex bg-[#EBF9F5] text-green-400 font-medium flex-col px-3 py-6 rounded-xl items-center w-1/6">
                    <span>9.3</span>
                    <p>
                      SO<sub>2</sub>
                    </p>
                  </div>
                  <div className="aqi-card flex bg-[#EBF9F5] text-green-400 font-medium flex-col px-3 py-6 rounded-xl items-center w-1/6">
                    <span>9.3</span>
                    <p>
                      NO<sub>2</sub>
                    </p>
                  </div>
                  <div className="aqi-card flex bg-[#EBF9F5] text-green-400 font-medium flex-col px-3 py-6 rounded-xl items-center w-1/6">
                    <span>9.3</span>
                    <p>
                      O<sub>3</sub>
                    </p>
                  </div>
                  <div className="aqi-card flex bg-[#EBF9F5] text-green-400 font-medium flex-col px-3 py-6 rounded-xl items-center w-1/6">
                    <span>9.3</span>
                    <span>CO</span>
                  </div>
                </div>
              </div>
            </div>
            {/* right side sunrise and sunset  */}
            <div className=" sunrise-sunset-container w-1/2 bg-white rounded-2xl p-6">
              <div className="sunrise-sunset-heading mb-2">
                <span className="text-2xl font-semibold">Sunrise & Sunset</span>
              </div>

              <SunriseSunsetCard todo={todo} />
              <SunriseSunsetCard todo={todo} />

              {/* little city sunrise and sunset row */}

              <SunriseSunsetRow todo={todo} />
              <SunriseSunsetRow todo={todo} />
              <SunriseSunsetRow todo={todo} />
            </div>
          </div>
        </div>
        <div className="right w-3/10 flex flex-col bg-white px-20 gap-4">
          <div className="top flex mt-4 justify-center">
            <div className="bg-[#F5F8FF] flex rounded-xl p-2 m-2">
              <MagnifyingGlassIcon size={28} color="#acb6df" />
              <input
                type="text"
                placeholder="Search"
                className="text-[#acb6df] px-1 focus:outline-hidden "
              />
            </div>
            <button className="bg-[#96a6e0] text-white font-medium p-2 m-2 rounded-xl px-4 hover:bg-[#6b769f] cursor-pointer">
              Search
            </button>
          </div>
          <div className="bg-linear-to-r from-[#9CBCFF] to-[#6497FF] rounded-2xl flex flex-col justify-center items-center px-4 py-6 gap-2">
            <img src={cloudy_day} alt="" className="w-34 h-34" />
            <span className="text-white font-medium text-5xl tracking-tighter">
              {todo?.list?.[0]?.main?.temp ?? "--"}°
            </span>{" "}
            <span className="text-white font-medium text-xl ">
              {todo?.list[0]?.weather[0]?.main}
            </span>
            <span className="text-white font-medium text-xl ">
              Today 15, December
            </span>
            <span className="text-white font-medium text-xl ">
              {todo?.city?.name}
            </span>
            <div className="w-full p-2 ">
              <div className="flex justify-around p-1">
                <div className="flex">
                  <WindIcon
                    size={16}
                    color="#fafafa"
                    weight="bold"
                    className="mr-1"
                  />
                  <span className="text-white text-sm/4 font-medium ">
                    Wind
                  </span>
                </div>
                <span className="text-white text-sm/4 font-medium ">
                  19 km/hr
                </span>
              </div>
              <div className="flex justify-around p-1">
                <div className="flex">
                  <DropIcon
                    size={16}
                    color="#fafafa"
                    weight="bold"
                    className="mr-1"
                  />
                  <span className="text-white text-sm/4 font-medium ">
                    Humidity
                  </span>
                </div>
                <span className="text-white text-sm/4 font-medium ">22 %</span>
              </div>
            </div>
          </div>
          <div className="bottom bg-linear-to-r from-[#FD99BF] to-[#FF699E] rounded-2xl flex flex-col justify-center items-center px-4 py-4 gap-2">
            <div className="w-full p-2 ">
              <div className="flex justify-around p-1">
                <div className="flex items-center">
                  <WindIcon
                    size={16}
                    color="#fafafa"
                    weight="bold"
                    className="mr-1"
                  />
                  <span className="text-white text-md font-medium ">Wind</span>
                </div>
                <span className="text-white text-md font-medium ">
                  19 km/hr
                </span>
              </div>
              <div className="flex justify-around p-1">
                <div className="flex items-center">
                  <DropIcon
                    size={16}
                    color="#fafafa"
                    weight="bold"
                    className="mr-1"
                  />
                  <span className="text-white text-sm/4 font-medium ">
                    Humidity
                  </span>
                </div>
                <span className="text-white text-sm/4 font-medium ">22 %</span>
              </div>
            </div>
          </div>
          <div className="bottom bg-linear-to-r from-[#FEC57D] to-[#FDAE52] rounded-2xl flex flex-col justify-center items-center px-4 py-4 gap-2">
            <div className="w-full p-2 ">
              <div className="flex justify-around p-1">
                <div className="flex items-center">
                  <WindIcon
                    size={16}
                    color="#fafafa"
                    weight="bold"
                    className="mr-1"
                  />
                  <span className="text-white text-md font-medium ">Wind</span>
                </div>
                <span className="text-white text-md font-medium ">
                  19 km/hr
                </span>
              </div>
              <div className="flex justify-around p-1">
                <div className="flex items-center">
                  <DropIcon
                    size={16}
                    color="#fafafa"
                    weight="bold"
                    className="mr-1"
                  />
                  <span className="text-white text-sm/4 font-medium ">
                    Humidity
                  </span>
                </div>
                <span className="text-white text-sm/4 font-medium ">22 %</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
