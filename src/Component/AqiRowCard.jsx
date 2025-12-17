import React from "react";

function AqiRowCard({ aqiVal, aqiComp }) {
  return (
    <>
      <div className="aqi-card flex bg-[#EBF9F5] text-green-400 font-medium flex-col px-2 py-6 rounded-xl items-center w-1/4  ">
        <span>{aqiVal}</span>
        <span>{aqiComp}</span>
      </div>
    </>
  );
}

export default AqiRowCard;
