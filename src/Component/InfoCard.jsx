function InfoCard({ gradient, rows }) {
  return (
    <div
      className={`rounded-2xl flex flex-col justify-center items-center px-4 py-4 gap-2 ${gradient}`}
    >
      <div className="w-full p-2">
        {rows.map((row, index) => (
          <div key={index} className="flex justify-between p-1">
            <div className="flex items-center">
              <row.icon size={18} color="#fff" weight="fill" className="mr-1" />
              <span className="text-white text-md font-medium">
                {row.label}
              </span>
            </div>
            <span className="text-white text-md font-medium">{row.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InfoCard;
