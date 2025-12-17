import {
  MapPinIcon,
  SunIcon,
  SunHorizonIcon,
  MoonStarsIcon,
  MagnifyingGlassIcon,
  DropIcon,
  WindIcon,
} from "@phosphor-icons/react";

function SunriseSunsetRow({ todo }) {
  return (
    <>
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
    </>
  );
}

export default SunriseSunsetRow;
