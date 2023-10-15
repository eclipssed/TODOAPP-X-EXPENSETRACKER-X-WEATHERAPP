import React, { useEffect, useState } from "react";
import axios from "axios";
import conf from "../conf/Conf";
import InputBox from "../components/InputBox";
import Button from "../components/Button";

const YourComponent = () => {
  const [data, setData] = useState("");
  const [city, setCity] = useState("kohat");
  const [error, setError] = useState(false);
  const key = conf.weatherApiKey;
  useEffect(() => {
    handleWeather();
  }, []);

  const handleWeather = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`
      )
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        setError(true);
      });
      setError(false)
    setCity("");
    setData("");
  };

  return (
    <section className="mt-10 mb-24 ">
      <h1 className="mb-4 text-xl font-bold">Weather Sphere</h1>
      <div className="max-w-sm mx-auto border border-orange-600 rounded-lg">
        <div className="flex justify-center items-center gap-4 mt-2">
          <InputBox
            placeholder={"Enter your city name..."}
            onChange={(e) => setCity(e.target.value)}
            value={city}
            type={"text"}
          />
          <Button
            bgColor={"bg-orange-500"}
            txtColor={"text-white"}
            label={"Search"}
            onClick={handleWeather}
          />
        </div>
        {/* <div className="flex flex-col justify-center items-center gap-10" /> */}
        {data ? (
          // Render data if it is available
          <div className="flex flex-col justify-center items-center gap-2 py-8">
            <h2 className="text-2xl font-bold">{data.name}</h2>
            <h3 className="font-semibold text-lg">{data.weather[0].main}</h3>
            <img
              className="w-[100px] h-[100px]"
              src={`https://openweathermap.org/img/w/${data.weather[0].icon}.png`}
            />
            <h1 className="text-2xl font-bold">{data.main.temp}&#176;</h1>
            <div className="flex py-4 px-16 justify-between border dark:border-orange-500 rounded-full shadow-lg">
              <div className="border-r-2 w-full px-4  border-slate-300 dark:border-orange-500">
                <h4 className="font-semibold">Min </h4>
                <h4 className="temp">{data.main.temp_min}&#176;</h4>
              </div>
              <div className="w-full px-4">
                <h4 className="font-semibold">Max</h4>
                <h4 className="temp">{data.main.temp_max}&#176;</h4>
              </div>
            </div>
          </div>
        ) : (
          // Render loading message while data is being fetched
          <div className=" m-4">
            <p className="font-bold text-xl">{error? 'No city Found' : "Loading..." }</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default YourComponent;
