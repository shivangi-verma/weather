import { CrosshairIcon } from "@phosphor-icons/react";

function RowAfterSunrise({ value, item, unit, icon: Icon }) {
  return (
    <>
      <div className="flex justify-between">
        <div className="flex justify-center items-center">
          {Icon && <Icon size={28} color="#ffc489" className="mr-1" />}
          <span className="text-gray-500 font-medium py-2">{item}</span>
        </div>
        <span className="text-gray-500 font-medium p-2">
          {value} {unit}
        </span>
      </div>
    </>
  );
}

export default RowAfterSunrise;
