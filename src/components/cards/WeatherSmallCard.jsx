const WeatherSmallCard = ({ title, details }) => {
  return (
    <div className="flex min-h-28 min-w-0 w-full flex-col items-center justify-center overflow-hidden border p-3 text-center capitalize md:p-4">
      <h2 className="max-w-full wrap-break-words text-xl font-semibold leading-tight md:text-2xl">
        {title || "--"}
      </h2>

      <p className="mt-2 wrap-break-words text-xs leading-5 opacity-70 md:text-sm">
        {details || "loading..."}
      </p>
    </div>
  );
};

export default WeatherSmallCard;
