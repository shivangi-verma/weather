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
  AngleIcon,
  SpeedometerIcon,
  FeatherIcon,
  DropSimpleIcon,
  EyeIcon,
  CrosshairIcon,
  FishSimpleIcon,
  ParkIcon,
} from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard";
import SunriseSunsetCard from "./SunriseSunsetCard";
import SunriseSunsetRow from "./SunriseSunsetRow";
import AqiRowCard from "./AqiRowCard";
import RowAfterSunrise from "./RowAfterSunrise";
import CurrentWeatherCard from "./CurrentWeatherCard";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import InfoCard from "./InfoCard";

export default function WeatherDashboardLayout() {
  const [forecast, setForecast] = useState(null);
  const [aqi, setAqi] = useState(null);
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

  const [city, setCity] = useState("Modena");
  const [search, setSearch] = useState("");

  const [loading, setLoading] = useState(true);

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

  const currentTemp =
    typeof forecast?.list?.[0]?.main?.temp === "number"
      ? forecast.list[0].main.temp.toFixed(1)
      : null;

  useEffect(() => {
    if (!city) return;

    const fetchForecast = async () => {
      try {
        setLoading(true);

        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`
        );

        if (!res.ok) throw new Error("Failed to fetch forecast");

        const data = await res.json();
        setForecast(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchForecast();
  }, [city, API_KEY]);

  useEffect(() => {
    if (!forecast?.city?.coord) return;

    const { lat, lon } = forecast.city.coord;

    const fetchAqi = async () => {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${API_KEY}`
        );

        if (!res.ok) throw new Error("Failed to fetch AQI");

        const data = await res.json();
        setAqi(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchAqi();
  }, [forecast, API_KEY]);

  return (
    <>
      <div className="min-h-screen flex flex-col lg:flex-row">
        <div className="left flex flex-col bg-[#f0f5ff] w-full lg:w-[70%] px-4 sm:px-6 md:px-10 lg:px-20">
          {/* greetings */}
          <div className="greetings py-6 lg:py-12 flex flex-col order-1 ">
            <h1 className="text-3xl  sm:text-4xl lg:text-5xl text-[#5E8CF6] font-bold">
              {formattedTime}
            </h1>
            <span className="text-sm  sm:text-base  font-medium p-2 text-gray-500">
              {formattedDate}
            </span>
            <span className="text-4xl  sm:text-5xl lg:text-7xl  text-[#5E8CF6] font-medium tracking-tighter">
              {greeting() || <Skeleton />}, Pumpkin!
            </span>
          </div>

          {/* for mobile right side first hidden on lg but visible on mobile  */}
          <div className=" right  flex flex-col  w-full lg:w-[30%] px-4 sm:px-6 md:px-10 lg:px-20 lg:bg-white gap-4 order-2 lg:hidden ">
            <CurrentWeatherCard
              forecast={forecast}
              loading={loading}
              currentTemp={currentTemp}
            />
          </div>

          {/* weather-cards */}
          <div className="weather-cards flex justify-center lg:justify-between  gap-4 py-6 order-3">
            {loading ? (
              <>
                <Skeleton height={150} width={100} />
                <Skeleton height={150} width={100} />
                <Skeleton height={150} width={100} />
                <Skeleton height={150} width={100} />
                <Skeleton height={150} width={100} />
              </>
            ) : (
              forecast?.list?.map((item, index) => {
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
              })
            )}
          </div>
          {/* containers-aqi-sunset */}
          <div className="containers-aqi-sunset flex flex-col lg:flex-row justify-between gap-4 mb-6 order-4">
            {/* left side aqi and monthly rain  */}
            <div className="aqi-container flex flex-col gap-4 w-full lg:w-1/2 shadow  rounded-2xl mb-4">
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
            <div className="sunrise-sunset-container  flex flex-col gap-4 w-full lg:w-1/2 shadow  rounded-2xl mb-4">
              <div className="bg-white rounded-2xl p-6 shadow flex flex-col justify-between ">
                <div className="sunrise-sunset-heading m-2">
                  <span className="text-2xl font-semibold">
                    Sunrise & Sunset
                  </span>
                </div>
                <SunriseSunsetCard forecast={forecast} />

                <RowAfterSunrise
                  value={forecast?.list[0]?.main?.pressure}
                  item="Pressure"
                  unit="Pa"
                  icon={CrosshairIcon}
                />
                <RowAfterSunrise
                  value={forecast?.list[0]?.main?.sea_level}
                  item="Sea Level"
                  unit="hPa"
                  icon={FishSimpleIcon}
                />
                <RowAfterSunrise
                  value={forecast?.list[0]?.main?.grnd_level}
                  item="Ground Level"
                  unit="hPa"
                  icon={ParkIcon}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="right-side flex flex-col w-full lg:w-[30%] px-4 sm:px-6 md:px-10 lg:px-20 bg-white lg:block lg:order-0 lg:gap-4 ">
          <div className="top flex my-4 justify-center">
            <div className="bg-[#F5F8FF] flex rounded-xl p-2 m-2 w-full max-w-xs">
              <MagnifyingGlassIcon
                size={28}
                color="#acb6df"
                className="shrink-0"
              />
              <input
                type="text"
                placeholder="Search City..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="text-[#acb6df] px-1 focus:outline-none bg-transparent w-full"
              />
            </div>
            <button
              className="bg-[#96a6e0] text-white font-medium p-2 m-2 rounded-xl px-4 hover:bg-[#6b769f] cursor-pointer"
              onClick={() => setCity(search)}
            >
              Search
            </button>
          </div>

          <CurrentWeatherCard
            forecast={forecast}
            loading={loading}
            currentTemp={currentTemp}
           
          />

          <InfoCard
            gradient="bg-linear-to-r from-[#FD99BF] to-[#FF699E]"
            rows={[
              {
                icon: SpeedometerIcon,
                label: "Wind Speed",
                value: `${forecast?.list[0]?.wind?.speed} m/s`,
              },
              {
                icon: AngleIcon,
                label: "Wind Degree",
                value: `${forecast?.list[0]?.wind?.deg}°`,
              },
              {
                icon: WindIcon,
                label: "Wind Gust",
                value: forecast?.list[0]?.wind?.gust
                  ? `${forecast.list[0].wind.gust} m/s`
                  : "--",
              },
            ]}
          />

          <InfoCard
            gradient="bg-linear-to-r from-[#FEC57D] to-[#FDAE52]"
            rows={[
              {
                icon: DropIcon,
                label: "Humidity",
                value: `${forecast?.list[0]?.main?.humidity}%`,
              },
              {
                icon: EyeIcon,
                label: "Visibility",
                value: `${forecast?.list[0]?.visibility} m`,
              },
            ]}
          />
        </div>
      </div>
    </>
  );
}
