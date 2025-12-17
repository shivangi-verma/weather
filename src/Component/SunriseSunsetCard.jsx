import {
  MapPinIcon,
  SunIcon,
  SunHorizonIcon,
  MoonStarsIcon,
  MagnifyingGlassIcon,
  DropIcon,
  WindIcon,
} from "@phosphor-icons/react";

function SunriseSunsetCard({ todo }) {
  const sunrise = todo?.city?.sunrise * 1000;
  const dateSunrise = new Date(sunrise);
  const sunriseTime = dateSunrise.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const sunset = todo?.city?.sunset * 1000;
  const dateSunset = new Date(sunset);
  const sunsetTime = dateSunset.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <>
      <div className="sunrise-card bg-[#FFF7F1] rounded-xl p-4 pb-6 mb-4 ">
        <div className="name-title flex items-center ml-2 mb-4 ">
          <MapPinIcon size={18} className="mr-1" />
          <span className="text-sm/6 font-medium text-gray-700">
            {todo?.city?.name}
          </span>
        </div>
        <div className="sunrise-sunset flex">
          <div className="sunrise w-1/2 flex items-center  ">
            <SunIcon size={38} color="#ffc489" className="mr-2" />
            <div className="flex flex-col">
              <span className=" leading-5 text-sm/6 font-medium text-gray-500 ">
                Sunrise
              </span>
              <span className="leading-5 font-medium text-[#5E8CF6] ">
                {sunriseTime}
              </span>
            </div>
          </div>
          <div className="sunrise w-1/2 flex items-center  ">
            <MoonStarsIcon size={38} color="#ffc489" className="mr-2" />
            <div className="flex flex-col">
              <span className=" leading-5 text-sm/6 font-medium text-gray-500 ">
                Sunset
              </span>
              <span className="leading-5 font-medium text-[#5E8CF6] ">
                {sunsetTime}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SunriseSunsetCard;
