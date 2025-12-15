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
} from "@phosphor-icons/react";

export default function WeatherDashboardLayout() {
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
            <div className="card bg-white shadow rounded-2xl p-2 flex flex-col justify-center items-center  w-full">
              <img src={rain} alt="" className="w-24 h-24" />
              <span>Sun</span>
              <span>28</span>
            </div>
            <div className="card bg-white shadow rounded-2xl p-2 flex flex-col  justify-center items-center w-full">
              <img src={cloudy_day} alt="" className="w-24 h-24" />
              <span>Sun</span>
              <span>28</span>
            </div>
            <div className="card bg-white shadow rounded-2xl p-2 flex flex-col justify-center items-center w-full">
              <img src={rain_thunder} alt="" className="w-24 h-24" />
              <span>Sun</span>
              <span>28</span>
            </div>
            <div className="card bg-white shadow rounded-2xl p-2 flex flex-col justify-center items-center w-full">
              <img src={sun} alt="" className="w-24 h-24" />
              <span>Sun</span>
              <span>28</span>
            </div>
            <div className="card bg-white shadow rounded-2xl p-2 flex flex-col  justify-center items-center w-full">
              <img src={thunder} alt="" className="w-24 h-24" />
              <span>Sun</span>
              <span>28</span>
            </div>
            <div className="card bg-white shadow rounded-2xl p-2 flex flex-col  justify-center items-center w-full">
              <img src={wind} alt="" className="w-24 h-24" />
              <span>Sun</span>
              <span>28</span>
            </div>
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
              {/* sunrise-sunset card s*/}
              <div className="sunrise-card bg-[#FFF7F1] rounded-xl p-4 pb-6 mb-4 ">
                <div className="name-title flex items-center ml-2 mb-4 ">
                  <MapPinIcon size={18} className="mr-1" />
                  <span className="text-sm/6 font-medium text-gray-700">
                    Tokyo
                  </span>
                </div>
                {/* sunrise and sunset */}
                <div className="sunrise-sunset flex">
                  {/* sunrise */}
                  <div className="sunrise w-1/2 flex items-center  ">
                    <SunIcon size={38} color="#ffc489" className="mr-2" />
                    <div className=" flex flex-col  ">
                      <span className=" leading-5 text-sm/6 font-medium text-gray-500 ">
                        Sunrise
                      </span>
                      <span className="leading-5 font-medium text-[#5E8CF6] ">
                        04:40 AM
                      </span>
                    </div>
                  </div>
                  {/* sunset */}
                  <div className="sunset w-1/2 flex items-center  ">
                    <MoonStarsIcon size={38} color="#ffc489" className="mr-2" />
                    <div className=" flex flex-col  ">
                      <span className=" leading-4 text-sm/6 font-medium text-gray-500 ">
                        Sunrise
                      </span>
                      <span className="leading-4 font-medium text-[#5E8CF6] ">
                        04:40 AM
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* sunrise-sunset card s*/}

              <div className="sunrise-card bg-[#FFF7F1] rounded-xl p-4 pb-6 mb-4">
                <div className="name-title flex items-center ml-2 mb-4 ">
                  <MapPinIcon size={18} className="mr-1" />
                  <span className="text-sm/6 font-medium text-gray-700">
                    Seoul
                  </span>
                </div>
                {/* sunrise and sunset */}
                <div className="sunrise-sunset flex">
                  {/* sunrise */}
                  <div className="sunrise w-1/2 flex items-center  ">
                    <SunIcon size={38} color="#ffc489" className="mr-2" />
                    <div className=" flex flex-col  ">
                      <span className=" leading-5 text-sm/6 font-medium text-gray-500 ">
                        Sunrise
                      </span>
                      <span className="leading-5 font-medium text-[#5E8CF6] ">
                        04:40 AM
                      </span>
                    </div>
                  </div>
                  {/* sunset */}
                  <div className="sunset w-1/2 flex items-center  ">
                    <MoonStarsIcon size={38} color="#ffc489" className="mr-2" />
                    <div className=" flex flex-col  ">
                      <span className=" leading-4 text-sm/6 font-medium text-gray-500 ">
                        Sunrise
                      </span>
                      <span className="leading-4 font-medium text-[#5E8CF6] ">
                        04:40 AM
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* little city sunrise and sunset row */}
              {/* city 1 */}
              <div className="flex justify-between px-2 items-center my-4 ">
                <div className="city flex items-center">
                  <MapPinIcon size={18} className="mr-1" />
                  <span>Rome</span>
                </div>
                <div className="sunrise-city flex items-center">
                  <SunIcon size={18} color="#ffc489" className="mr-2" />
                  <span>05:00 AM</span>
                </div>
                <div className="sunset-city flex items-center">
                  <SunIcon size={18} color="#ffc489" className="mr-2" />
                  <span>05:00 AM</span>
                </div>
              </div>
              {/* city 2 */}

              <div className="flex justify-between px-2 items-center my-4 ">
                <div className="city flex items-center">
                  <MapPinIcon size={18} className="mr-1" />
                  <span>Sydney</span>
                </div>
                <div className="sunrise-city flex items-center">
                  <SunIcon size={18} color="#ffc489" className="mr-2" />
                  <span>05:00 AM</span>
                </div>
                <div className="sunset-city flex items-center">
                  <SunIcon size={18} color="#ffc489" className="mr-2" />
                  <span>05:00 AM</span>
                </div>
              </div>
              {/* city 2 */}
              <div className="flex justify-between px-2 items-center my-4 ">
                <div className="city flex items-center">
                  <MapPinIcon size={18} className="mr-1" />
                  <span>Kyoto</span>
                </div>
                <div className="sunrise-city flex items-center">
                  <SunIcon size={18} color="#ffc489" className="mr-2" />
                  <span>05:00 AM</span>
                </div>
                <div className="sunset-city flex items-center">
                  <SunIcon size={18} color="#ffc489" className="mr-2" />
                  <span>05:00 AM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right w-3/10 flex flex-col bg-white px-20 justify-around">
          <div className="top flex">
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
          <div className="mid h-14 bg-linear-to-r from-[#9CBCFF] to-[#6497FF] rounded-2xl flex justify-center items-center">
            <img src={cloudy_day} alt="" className="w-28 h-28" />
            
          </div>
          <div className="bottom"></div>
        </div>
      </div>
    </>
  );
}
