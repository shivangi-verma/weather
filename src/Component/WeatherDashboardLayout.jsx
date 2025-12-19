import React from "react";
import rain from "../assets/rain.png";
import cloudy_day from "../assets/cloudy_day.png";
import rain_thunder from "../assets/rain_thunder.png";
import sun from "../assets/sun.png";
import thunder from "../assets/thunder.png";
import wind from "../assets/wind.png";
import air from "../assets/air.png";
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
} from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard";
import SunriseSunsetCard from "./SunriseSunsetCard";
import SunriseSunsetRow from "./SunriseSunsetRow";
import AqiRowCard from "./AqiRowCard";

export default function WeatherDashboardLayout() {
  const [todo, setTodo] = useState(null);
  const [aqi, setAqi] = useState(null);
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&units=metric&appid=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setTodo(data);
      });
  }, []);

  // aqi

  useEffect(() => {
    fetch(
      `http://api.openweathermap.org/data/2.5/air_pollution?lat=44.34&lon=10.99&appid=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => {
        setAqi(data);
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

  const now = new Date();
  const formattedTime = now
    .toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    })
    .toUpperCase();

  const formattedDate = now.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  function greeting() {
    const hour = new Date().getHours();

    if (hour >= 5 && hour < 12) return "Good Morning";
    if (hour >= 12 && hour < 17) return "Good Afternoon";
    if (hour >= 17 && hour < 21) return "Good Evening";
    return "Good Night";
  }

  // const currentTemp = (todo?.list?.[0]?.main?.temp).toFixed(1);
  const currentTemp =
    typeof todo?.list?.[0]?.main?.temp === "number"
      ? todo.list[0].main.temp.toFixed(1)
      : null;

  const [city, setCity] = useState("Modena");
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (!city) return;

    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setTodo(data));
  }, [city]);

  useEffect(() => {
    if (!todo?.city?.coord) return;

    const { lat, lon } = todo.city.coord;

    fetch(
      `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setAqi(data));
  }, [todo]);

  return (
    <>
      <div className="min-container flex ">
        <div className="left flex flex-col bg-[#f0f5ff]   w-7/10 px-20">
          <div className="greetings py-12 flex flex-col">
            <h1 className="text-5xl text-[#5E8CF6] font-bold">
              {formattedTime}
            </h1>
            <span className="text-sm/6 font-medium p-2 text-gray-500">
              {formattedDate}
            </span>
            <span className="text-7xl text-[#5E8CF6] font-medium tracking-tighter">
              {greeting()}, Shivangi!
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
                    temp={item?.main?.temp}
                  />
                );
            })}
          </div>
          {/* Air Quality Index and sunrise sunset  */}
          <div className="container-aqi-sunset flex justify-between gap-4 mb-6">
            {/* left side aqi and monthly rain  */}
            <div className="flex flex-col gap-4 w-1/2 shadow  rounded-2xl ">
              {/* air quality index  */}
              <div className="aqi-container bg-white rounded-2xl p-6 w-full">
                <div className="aqi-heading flex justify-between">
                  <span className="text-2xl font-semibold">
                    Air Quality Index
                  </span>
                  {/* <span className="text-2xl font-semibold">
                    {aqi?.list[0]?.main?.aqi}
                  </span> */}
                </div>
                <div className="aqi-value flex py-2 justify-between">
                  <div className="flex">
                    <img src={air} alt="" className="w-12 h-12 mr-2" />
                    <div className="aqi flex flex-col px-2">
                      <span className="font-semibold text-lg text-gray-600">
                        Good
                      </span>
                      <span className="text-sm/4 text-gray-500">
                        A perfect day for a walk!
                      </span>
                    </div>
                  </div>
                  <div className="bg-[#f3f9fd] text-[#7097DD] font-medium px-6 rounded-2xl flex justify-center items-center  ">
                    <span> AQI: {aqi?.list[0]?.main?.aqi}</span>
                  </div>
                </div>
                <div className="aqi-cards w-full ">
                  <div className="flex gap-2 m-2">
                    <AqiRowCard
                      aqiVal={aqi?.list[0]?.components?.pm2_5}
                      aqiComp="PM2"
                    />
                    <AqiRowCard
                      aqiVal={aqi?.list[0]?.components?.pm10}
                      aqiComp="PM10"
                    />
                    <AqiRowCard
                      aqiVal={aqi?.list[0]?.components?.co}
                      aqiComp="CO"
                    />
                    <AqiRowCard
                      aqiVal={aqi?.list[0]?.components?.no}
                      aqiComp="NO"
                    />
                  </div>
                  <div className="flex gap-2 m-2">
                    <AqiRowCard
                      aqiVal={aqi?.list[0]?.components?.no2}
                      aqiComp="NO2"
                    />
                    <AqiRowCard
                      aqiVal={aqi?.list[0]?.components?.o3}
                      aqiComp="O3"
                    />{" "}
                    <AqiRowCard
                      aqiVal={aqi?.list[0]?.components?.so2}
                      aqiComp="SO2"
                    />
                    <AqiRowCard
                      aqiVal={aqi?.list[0]?.components?.nh3}
                      aqiComp="NH3"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* right side sunrise and sunset  */}
            <div className="sunrise-sunset-container w-1/2 bg-white rounded-2xl p-6 shadow">
              <div className="sunrise-sunset-heading mb-2">
                <span className="text-2xl font-semibold">Sunrise & Sunset</span>
              </div>

              <SunriseSunsetCard todo={todo} />
              {/* <SunriseSunsetCard todo={todo} /> */}

              {/* little city sunrise and sunset row */}
              {/* 
              <SunriseSunsetRow todo={todo} />
              <SunriseSunsetRow todo={todo} />
              <SunriseSunsetRow todo={todo} /> */}
            </div>
          </div>
        </div>
        <div className="right w-3/10 flex flex-col bg-white px-20 gap-4">
          <div className="top flex mt-4 justify-center">
            <div className="bg-[#F5F8FF] flex rounded-xl p-2 m-2">
              <MagnifyingGlassIcon size={28} color="#acb6df" />
              <input
                type="text"
                placeholder="Search City..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="text-[#acb6df] px-1 focus:outline-hidden "
              />
            </div>
            <button
              className="bg-[#96a6e0] text-white font-medium p-2 m-2 rounded-xl px-4 hover:bg-[#6b769f] cursor-pointer"
              onClick={() => setCity(search)}
            >
              Search
            </button>
          </div>
          <div className="bg-linear-to-r from-[#9CBCFF] to-[#6497FF] rounded-2xl flex flex-col justify-center items-center px-4 py-6 gap-2">
            <img src={cloudy_day} alt="" className="w-34 h-34" />
            <span className="text-white font-medium text-5xl tracking-tighter">
              {currentTemp ?? "--"}°C
            </span>
            <span className="text-white font-medium text-xl ">
              {todo?.list[0]?.weather[0]?.main}
            </span>
            {/* <span className="text-white font-medium text-xl ">
              Today 15, December
            </span> */}
            <span className="text-white font-medium text-xl flex justify-center items-center">
              <MapPinLineIcon size={20} className="mr-1" weight="fill" />
              {todo?.city?.name}
            </span>
            <div className="w-full p-2 ">
              <div className="flex justify-around p-1">
                <div className="flex">
                  <WindIcon
                    size={24}
                    color="#fafafa"
                    weight="bold"
                    className="mr-1"
                  />
                  <span className="text-white text-md font-medium ">
                    Feels Like
                  </span>
                </div>
                <span className="text-white text-md font-medium ">
                  {todo?.list[0]?.main?.feels_like}°C
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
                  <span className="text-white text-md font-medium ">
                    Min Temp
                  </span>
                </div>
                <span className="text-white text-md font-medium ">
                  {todo?.list[0]?.main?.temp_min}°C
                </span>
              </div>
              <div className="flex justify-around p-1">
                <div className="flex items-center justify-center">
                  <FireIcon
                    size={20}
                    color="#fff"
                    weight="fill"
                    className="mr-1"
                  />
                  <span className="text-white text-md font-medium ">
                    Max Temp
                  </span>
                </div>
                <span className="text-white text-md font-medium ">
                  {todo?.list[0]?.main?.temp_max}°C
                </span>
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
