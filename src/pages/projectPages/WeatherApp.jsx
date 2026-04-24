import React, { useEffect, useState } from "react";
import useWeatherData from "../../hooks/wertherAPI/weatherData";
import { IoLocationSharp } from "react-icons/io5";
import { NavLink } from "react-router";
import { MdErrorOutline } from "react-icons/md";

const WeatherApp = () => {
  const [locationInput, setLocationInput] = useState("");
  const [locationName, setLocationName] = useState("dhaka");

  const { weatherApi, error, loading } = useWeatherData(locationName);

  const handleLocationName = (e) => {
    e.preventDefault();

    if (!locationInput.trim()) return; // prevent empty input

    setLocationName(locationInput.trim());
    setLocationInput("");
  };

  console.log(`location Input from user`, locationInput);
  console.log(`location set Function`, locationName);

  useEffect(() => {
    console.log("this frm after sending data", weatherApi);
  }, [weatherApi]);
  return (
    <main className="w-7xl mx-auto">
      <div className="border-x border-b h-100 flex items-center justify-center">
        <div className="w-120 tracking-wider">
          <h2 className="text-3xl ">
            Weather app using weather API. fully responsive and acurate data
          </h2>
          <p className="mt-2 ">
            Weather app using Reactjs and TailwindCSS. Backend APi from{" "}
            <span className="font-semibold tracking-wider text-lg italic text-blue-400 ">
              <NavLink to={`https://www.weatherapi.com/`} target="_blank">
                weatherapi.com
              </NavLink>
            </span>{" "}
            Free api and usage with a limited number of request
          </p>
        </div>
      </div>

      {/* main content */}
      <div className="border-x border-b h-140 flex items-center justify-center">
        <div className="flex items-center gap-4">
          <div className="border p-10 rounded-xl h-120">
            {/* search location */}
            <div>
              {/* input area */}
              <div>
                <input
                  type="text"
                  placeholder="enter city/location"
                  value={locationInput}
                  onChange={(e) => setLocationInput(e.target.value)}
                  className="outline dark:outline-white -outline-offset-1 px-2 py-1 placeholder:text-black dark:placeholder:text-white rounded-l-xl "
                />
                <button
                  onClick={handleLocationName}
                  type="submit"
                  className="bg-black text-white dark:bg-white dark:text-black px-2 py-1 rounded-r-xl"
                >
                  Search
                </button>
              </div>
            </div>

            {/* details of the location */}
            {error ? (
              error && (
                // error
                <div className="flex justify-center items-center h-full">
                  <p className="text-blue-400 w-50 text-center mt-3 text-lg flex flex-col justify-center items-center capitalize ">
                    <MdErrorOutline className="h-12 w-12" /> "{locationName}" not found. Try another
                    location.
                  </p>
                </div>
              )
            ) : (
              <div className="flex flex-col items-center">
                <img
                  className="h-40 w-40 "
                  src={`${weatherApi ? weatherApi.current.condition.icon : ""}`}
                  alt="weather icon"
                />
                {/* temperature */}
                <div className="my-4">
                  <h2 className="font-semibold text-6xl relative text-nowrap">
                    {weatherApi ? weatherApi.current.temp_c : ""}{" "}
                    <span className="absolute -top-2 text-3xl">&deg; c</span>
                  </h2>
                  <h2 className="font-semibold text-2xl relative my-2 opacity-45">
                    or {""}
                    {weatherApi ? weatherApi.current.temp_f : ""}{" "}
                    <span className="absolute -top-2 text-xl">&deg; f</span>
                  </h2>
                </div>
                <p className="capitalize text-lg font-semibold tracking-wider  ">
                  condition:{" "}
                  {`${weatherApi ? weatherApi.current.condition.text : ""}`}
                </p>
                <div className="flex items-center opacity-60 mt-3 ">
                  <p className="flex items-center pr-2">
                    <IoLocationSharp className="h-6 w-6 mr-1" />{" "}
                    {weatherApi ? weatherApi.location.name : ""},{" "}
                  </p>
                  <p>{weatherApi ? weatherApi.location.country : ""}</p>
                </div>
              </div>
            )}
          </div>
          <div className="w-180 border h-120 rounded-xl ">
            <p>details of weather</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default WeatherApp;
