import { useState } from "react";
import { IoLocationSharp } from "react-icons/io5";
import { MdErrorOutline } from "react-icons/md";
import Footer from "../../components/navigation/Footer";
import WeatherSmallCard from "../../components/cards/WeatherSmallCard";
import useWeatherData from "../../hooks/weatherApi/WeatherData";

const WeatherApp = () => {
  const [locationInput, setLocationInput] = useState("");
  const [locationName, setLocationName] = useState("Dhaka");

  const { weatherApi, error, loading } = useWeatherData(locationName);

  const handleLocationSubmit = (event) => {
    event.preventDefault();

    const nextLocation = locationInput.trim();

    if (
      !nextLocation ||
      nextLocation.toLowerCase() === locationName.toLowerCase()
    ) {
      return;
    }

    setLocationName(nextLocation);
    setLocationInput("");
  };

  const currentWeather = weatherApi?.current;
  const location = weatherApi?.location;

  return (
    <main className="mx-auto w-full max-w-7xl">
      {/* Introduction */}
      <section className="border-x border-b px-5 py-12 md:px-10 md:py-16 lg:px-20 lg:py-20">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
            React API project
          </p>

          <h1 className="mt-3 text-4xl font-bold leading-tight md:text-5xl">
            Live weather dashboard
          </h1>

          <p className="mt-4 leading-7 opacity-70 md:text-lg">
            Search for a city and view live temperature, conditions, wind,
            humidity, UV index, and visibility data from WeatherAPI.
          </p>

          <a
            href="https://www.weatherapi.com/"
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-block text-sm font-semibold text-blue-400 hover:underline"
          >
            View WeatherAPI
          </a>
        </div>
      </section>

      {/* Weather workspace */}
      <section className="border-x border-b px-5 py-10 md:px-10 md:py-14 lg:px-20 lg:py-20">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          {/* Main weather card */}
          <article className="border p-5 md:p-8">
            <form
              onSubmit={handleLocationSubmit}
              className="flex w-full flex-col gap-2 sm:flex-row"
            >
              <label htmlFor="location" className="sr-only">
                Search city or location
              </label>

              <input
                id="location"
                type="search"
                value={locationInput}
                onChange={(event) => setLocationInput(event.target.value)}
                placeholder="Search city or location"
                className="min-w-0 flex-1 rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-400"
              />

              <button
                type="submit"
                className="rounded-lg bg-black px-5 py-2 font-medium text-white transition hover:opacity-80 dark:bg-white dark:text-black"
              >
                Search
              </button>
            </form>

            <div
              className="mt-8 flex min-h-96 flex-col items-center justify-center text-center"
              aria-live="polite"
            >
              {loading && (
                <p className="text-lg opacity-60">
                  Checking the latest conditions...
                </p>
              )}

              {!loading && error && (
                <div className="max-w-xs">
                  <MdErrorOutline
                    className="mx-auto h-12 w-12 text-blue-400"
                    aria-hidden="true"
                  />

                  <p className="mt-3 text-lg font-medium">
                    We could not find “{locationName}”.
                  </p>

                  <p className="mt-2 text-sm opacity-60">
                    Try another city or location.
                  </p>
                </div>
              )}

              {!loading && !error && !weatherApi && (
                <p className="opacity-60">
                  Search for a city to view its current weather.
                </p>
              )}

              {!loading && !error && weatherApi && (
                <>
                  <img
                    src={currentWeather.condition.icon}
                    alt={currentWeather.condition.text}
                    className="h-32 w-32"
                  />

                  <p className="mt-2 text-6xl font-semibold">
                    {currentWeather.temp_c}
                    <span className="ml-1 text-3xl align-top">°C</span>
                  </p>

                  <p className="mt-2 text-lg opacity-60">
                    {currentWeather.temp_f}°F
                  </p>

                  <p className="mt-4 text-lg font-semibold capitalize">
                    {currentWeather.condition.text}
                  </p>

                  <div className="mt-3 flex flex-wrap items-center justify-center gap-2 opacity-60">
                    <IoLocationSharp aria-hidden="true" />
                    <span>
                      {location.name}, {location.country}
                    </span>
                  </div>

                  <p className="mt-3 text-sm opacity-50">
                    Updated at {currentWeather.last_updated}
                  </p>
                </>
              )}
            </div>
          </article>

          {/* Details and guide */}
          <div className="grid gap-6">
            <section className="border p-5 md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                Current details
              </p>

              <h2 className="mt-3 text-2xl font-semibold">
                Weather information
              </h2>

              <div className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
                <WeatherSmallCard
                  title={
                    currentWeather ? `${currentWeather.wind_kph} km/h` : "--"
                  }
                  details="wind speed"
                />

                <WeatherSmallCard
                  title={currentWeather ? `${currentWeather.humidity}%` : "--"}
                  details="humidity"
                />

                <WeatherSmallCard
                  title={currentWeather ? currentWeather.uv : "--"}
                  details="UV index"
                />

                <WeatherSmallCard
                  title={currentWeather ? `${currentWeather.vis_km} km` : "--"}
                  details="visibility"
                />
              </div>
            </section>

            <section className="border p-5 md:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
                How it works
              </p>

              <h2 className="mt-3 text-2xl font-semibold">
                A small API-driven project
              </h2>

              <ol className="mt-5 list-inside list-decimal space-y-3 text-sm leading-6 opacity-70">
                <li>Enter a city or location in the search field.</li>
                <li>The app requests the latest data from WeatherAPI.</li>
                <li>
                  The interface displays loading, success, and error states.
                </li>
                <li>Search again to compare another location.</li>
              </ol>
            </section>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default WeatherApp;
