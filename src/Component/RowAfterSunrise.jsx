import { CrosshairIcon } from "@phosphor-icons/react";

function RowAfterSunrise({ todo, item, unit }) {
  return (
    <>
      <div className="flex justify-between">
        <div className="flex justify-center items-center">
          <CrosshairIcon size={28} color="#ffc489" className="mr-1" />
          <span className="text-gray-500 font-medium py-2">{item}</span>
        </div>
        <span className="text-gray-500 font-medium p-2">
          {todo?.list[0]?.main?.pressure} {unit}
        </span>
      </div>
    </>
  );
}

export default RowAfterSunrise;
