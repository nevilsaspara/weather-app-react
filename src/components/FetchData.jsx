import axios from "axios";
import React, { useState } from "react";
import ReactAnimatedWeather from "react-animated-weather";
import mygif from "../images/placeholder.png";
import "font-awesome/css/font-awesome.min.css";
import "./Home.css";
const FetchData = () => {
  const [query, setQuery] = useState("");
  const [mydata, setMydata] = useState("");
  const [icon, setIcon] = useState();
  const [main, setMain] = useState("");

  const inputHandler = (e) => {
    setQuery(e.target.value);
  };
  const defaults = {
    color: "white",
    size: 112,
    animate: true,
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=b4fb58dc4f3ab576a9822d894dc586f2&units=metric`
      )
      .then(function (response) {
        setMydata(response.data);
        console.log(mydata);
        setMain(response.data.weather[0].main);
        console.log(main);

        switch (main) {
          case "Haze":
            setIcon("CLOUDY");
            break;
          case "Clouds":
            setIcon("CLEAR_DAY");
            break;
          case "Rain":
            setIcon("RAIN");
            break;
          case "Snow":
            setIcon("SNOW");
            break;
          case "Dust":
            setIcon("WIND");
            break;
          case "Drizzle":
            setIcon("SLEET");
            break;
          case "Fog":
            setIcon("FOG");
            break;
          case "Smoke":
            setIcon("FOG");
            break;
          case "Tornado":
            setIcon("WIND");
            break;
          default:
            setIcon("CLEAR_DAY");
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  };

  return (
    <>
      <br></br>
      <div className="main">
        <input
          className="form-control my-input"
          onChange={inputHandler}
          placeholder="Enter a city name"
        />
        <i
          className="fa fa-search search-icon fa-lg my-icon-2 ml-2"
          aria-hidden="true"
          onClick={handleSubmit}
        ></i>
      </div>
      <div>
        <br></br>
        <br></br>
        <br></br>
        <div>
          {typeof mydata.main !== "undefined" ? (
            <div>
              <h1 className="d-flex align-items-center justify-content-center">
                {mydata.weather[0].main}
              </h1>
              <div className="my-div">
                <ReactAnimatedWeather
                  className="my-icon"
                  icon={icon}
                  color={defaults.color}
                  size={defaults.size}
                  animate={defaults.animate}
                />
              </div>
              <br />
              <br />
              <h5 className="d-flex align-items-center justify-content-center my-own-text">
                {mydata.name}
                <img
                  src={mygif}
                  alt="location"
                  height="20px"
                  width="20px"
                  className="m-1"
                />
              </h5>
              <hr className="hr"></hr>
              <h5 className="d-flex align-items-center justify-content-center my-own-text">
                Temperature: {mydata.main.temp}℃
              </h5>
              <hr className="hr"></hr>
              <h5 className="d-flex align-items-center justify-content-center my-own-text">
                Humidity: {mydata.main.humidity}
              </h5>
              <hr className="hr"></hr>
              <h5 className="d-flex align-items-center justify-content-center my-own-text">
                Visibility: {mydata.visibility}
              </h5>
              <hr className="hr"></hr>
              <h5 className="d-flex align-items-center justify-content-center my-own-text">
                Wind Speed: {mydata.wind.speed} Km/h
              </h5>
            </div>
          ) : (
            <p></p>
          )}
        </div>
      </div>
    </>
  );
};

export default FetchData;
